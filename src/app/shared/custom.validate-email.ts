import { AbstractControl, FormGroup } from '@angular/forms';
// import { group } from 'console';

// export class ValidateEmail {

//     static matchEmails(group: AbstractControl): { [key: string]: any } | null {
//         const emailControl = group.get('email');
//         const confirmEmailControl = group.get('confirmEmail');
//         if (emailControl?.value === confirmEmailControl?.value
//           || (confirmEmailControl?.pristine && confirmEmailControl?.value === '')) {
//           return null;
//         } else {
//           return { 'emailMismatch': true };
//         }
//       }
  
// }
export function matchingEmail(emailKey: string, confirmEmailKey: string) {

      return (group: FormGroup) => {
        let email = group.controls[emailKey];
        let emailConfirmation = group.controls[confirmEmailKey];
        if (email.value !== emailConfirmation.value) {
          return emailConfirmation.setErrors({mismatchedEmail: true})
        }
      }
    
  }