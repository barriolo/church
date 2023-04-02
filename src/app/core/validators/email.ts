import { AbstractControl } from '@angular/forms';

export class GlobalValidator {
  static emailValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const emailRegex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      control?.value !== ''  && !emailRegex?.test(control.value)
    ) {
      return { emailInvalid: true };
    }
    return null;
  }
}
