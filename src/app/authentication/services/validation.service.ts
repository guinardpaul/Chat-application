import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class ValidationService {

  constructor() { }

  emailValidation(controls: FormControl) {
    const EMAIL_REGEXP =
      new RegExp(['^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
        '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
        '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
        '[a-zA-Z]{2,}))$'].join(''));

    if (EMAIL_REGEXP.test(controls.value)) {
      return null;
    }

    return {
      emailValidation: true
    };
  }

  passwordValidation(group: FormGroup) {
    if (group.value.password !== group.value.confirmPassword) {
      return {
        passwordValidation: true
      };
    }

    return null;
  }

}
