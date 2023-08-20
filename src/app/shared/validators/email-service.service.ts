import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService{
    constructor() { }

    // static validate(): AsyncValidatorFn {
    //     return (control: AbstractControl): Observable<ValidationErrors> => {
    //         const email = control.value
    
    //         return of({
    //             emailToken:true
    //         })
    //     };
    //   }

    // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    //     const email = control.value
    
    //         return of({
    //             emailToken:true
    //         })
    // }
}

// export function emailValidator(): AsyncValidatorFn {
//     return (control: AbstractControl) => {
//         const email = control.value
    
//         return of({
//             emailToken:true
//         }).pipe(
//             delay(2000)
//         )
//     };
// }

export function emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
        const email = control.value
        
        const httoCallObservable = new Observable<ValidationErrors | null>((suscriber)=>{
            if(email === 'ricardo@gmail.com') {
                suscriber.next({emailToken:true})
                suscriber.complete()
                //return
            }

            suscriber.next(null)
            suscriber.complete()
        }).pipe(
            delay(3000)
            )

        return httoCallObservable
    };
}