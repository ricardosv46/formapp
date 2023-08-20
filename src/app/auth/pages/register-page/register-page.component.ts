import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidatorService, emailValidator } from 'src/app/shared/validators/email-service.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    // email:['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern),[new EmailValidatorService()]]],
    email:['',[Validators.required, Validators.pattern(this.validatorsService.emailPattern)],[emailValidator()]],
    userName:['',[Validators.required,this.validatorsService.cantBeStrider]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required]]

  },{
    validators:[
      this.validatorsService.isFieldOneEqualFieldTwo('password','password2'),
    ]
  })

  constructor(
    private fb:FormBuilder,
    private validatorsService:ValidatorsService,
    ){}

  isValidField (field:string){
    return this.validatorsService.isValidField(this.myForm,field)
  }

  onSubmit(): void {

    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched()  
      return
    }

    if(this.myForm.valid){
      console.log(this.myForm.value);
    } 

  }

}
