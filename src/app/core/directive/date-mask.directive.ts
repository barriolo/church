import {
    Directive,
    ElementRef,
    HostBinding,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as textMask from 'vanilla-text-mask/dist/vanillaTextMask.js';

@Directive({
    selector: '[appMaskDate]',
})
export class DateMaskDirective implements OnInit, OnDestroy {
    @HostBinding('class.fed-mask') compClass = true;

    @Input()
    mbMask = null;

    defaultConfig = {
        mask: [
            new RegExp('\\d'),
            new RegExp('\\d'),
            '/',
            new RegExp('\\d'),
            new RegExp('\\d'),
            '/',
            new RegExp('\\d'),
            new RegExp('\\d'),
            new RegExp('\\d'),
            new RegExp('\\d'),
        ],
        showMask: false,
        guide: false,
        placeholderChar: '_',
    };
    maskedInputController: any;

    constructor(private element: ElementRef) {}

    ngOnInit(): void {
        this.maskedInputController = textMask['maskInput']({
            inputElement: this.element.nativeElement,
            ...(this.mbMask || this.defaultConfig),
        });
    }

    ngOnDestroy() {
        if (this.maskedInputController) this.maskedInputController.destroy();
    }
}
