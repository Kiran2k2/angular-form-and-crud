import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {

form= new FormGroup({
  email:new FormControl('',{
    validators:[Validators.email,Validators.required]
  }),
  password:new FormGroup({
    password:new FormControl('',{
      validators:[Validators.required,Validators.minLength(6)]
    }),
    confirmPassword:new FormControl('',{validators:[Validators.required]})

  }),
  
 firstName :new FormControl('',{validators:[Validators.required]}),
 lastName:new FormControl('',{validators:[Validators.required]}),

address:new FormGroup({
  street:new FormControl('',{validators:[Validators.required]}),
  number:new FormControl('',{validators:[Validators.required]}),
  postalCode:new FormControl('',{validators:[Validators.required]}),
  city:new FormControl('',{validators:[Validators.required]}),

}),


role:new FormControl<'student' |'teacher'| 'employee'| 'founder'|'others'>('student',{validators:[Validators.required]}),

source:new FormArray([
  new FormControl(false),
  new FormControl(false),
  new FormControl(false),


]),

agree:new FormControl(false,{validators:[Validators.required]})



 


})
onSubmit(){
  console.log(this.form);
}

}
