import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
export class CustomValidator {
  static hourValidator(hour): any {
    if (hour.pristine) {
      return null;
    }
    const hour_REGEXP = /^(10|11|12|[1-9]):[0-5][0-9]$/;
    hour.markAsTouched();
    if (hour_REGEXP.test(hour.value)) {
      return null;
    }
    return {
      invalidhour: true,
    };
  }

  static verify_pasword(password, re_password): any {
    if (password != re_password) {
      return {
        validate: false,
      };
    }
    return {
      validate: true,
    };
  }
}

export function ConfirmPasswordValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName];
    if (
      matchingControl.errors &&
      !matchingControl.errors.confirmPasswordValidator
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmPasswordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

// export function matchValidator(
//   matchTo: string,
//   reverse?: boolean
// ): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     if (control.parent && reverse) {
//       const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
//       if (c) {
//         c.updateValueAndValidity();
//       }
//       return null;
//     }
//     return !!control.parent &&
//       !!control.parent.value &&
//       control.value === (control.parent?.controls as any)[matchTo].value
//       ? null
//       : { matching: true };
//   };
// }
