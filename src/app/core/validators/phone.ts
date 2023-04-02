import { AbstractControl } from '@angular/forms';

export class PhoneValidator {
  static phoneValidValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    // tslint:disable-next-line: max-line-length
    const phoneRegex =
      /^(1[1-9]|2[12345]|3[1234578]|4[1-9]|5[1345]|6[1-9]|7[134579]|8[1-9]|9[1-9])(([6-9]\d{8})|([2-5]\d{7}))$/;

    // tslint:disable-next-line: no-bitwise
    if (
      control?.value !== '' && control?.value?.length > 7 && !phoneRegex?.test(control.value)
    ) {
      return { phoneInvalid: true };
    }
    return null;
  }
}
