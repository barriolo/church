import { AbstractControl } from '@angular/forms';

export class DecimalValidator {
  static decimalValidValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    // tslint:disable-next-line: max-line-length
     const numRegex = /^-?\d*[.,]?\d{0,2}$/;
    // tslint:disable-next-line: no-bitwise\
    if(control?.value < 0) {
      return { isNegative: true };
    }
    if (
      control?.value !== 0 && String(control?.value).length && !numRegex?.test(control.value)
    ) {
      return { decimal: true };
    }
    return null;
  }
}
