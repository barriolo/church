import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export class ValidatorDate {
  static dateValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    // tslint:disable-next-line: max-line-length

    // tslint:disable-next-line: no-bitwise
    if (control?.value !== '') {
      if(!moment(control?.value, 'DD-MM-YYYY').isValid()) {
        return { dateInvalid: true };
      }
    }
    return {}
  }
}
