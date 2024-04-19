
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormsModule, Validators, FormGroup, FormControl, ReactiveFormsModule, AbstractControl, MinLengthValidator } from '@angular/forms';
import { ServiceComponent } from './../service/service.component';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { signUp } from '../data-type';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  
   signUpForm!: FormGroup; 
   submitted= false;

  constructor(
    private seller: ServiceComponent,
    private fb: FormBuilder,
    private router: Router
    ){}


  ngOnInit(): void {
    this.seller.reloadSeller();

    this.signUpForm= this.fb.group({
      status: ['customer', Validators.required],
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\(\)_\-\+=\[\]\{\};:'",.<>\/?\\|])[A-Za-z\d!@#\$%\^&\*\(\)_\-\+=\[\]\{\};:'",.<>\/?\\|]{8,32}$/)]
      ],
      confirmPassword: ['', [Validators.required]]
    },{validator: this.passwordMatchValidator})

    console.log(this.signUpForm.errors);

  }
  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (passwordControl?.value === confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors(null);
    } else {
      confirmPasswordControl?.setErrors({ mismatch: true });
    }
  }
  get signUpData(){
    return this.signUpForm.controls;
  }
  signUp(data: signUp): void{
    console.log(data)
    this.submitted= true;

    const inputName = data.username;
    const inputEmail = data.email;
    console.log(inputName, inputEmail)

    this.seller.getUserData(data).subscribe((result)=>{
      console.log(result)
      if(result&&result.body.length==1){
        if((result&&result.body[0]['username']==inputName) && (result&&result.body[0]['email']!=inputEmail)){
          Swal.fire({
            title: 'Failed!',
            text: 'Username has already existed.',
            icon: 'error'
          })
        }else if((result&&result.body[0]['email']==inputEmail) && (result&&result.body[0]['username']!=inputName)){
          Swal.fire({
            title: 'Failed!',
            text: 'Email has already existed.',
            icon: 'error'
          })
        }else if((result&&result.body[0]['email']==inputEmail) && (result&&result.body[0]['username']==inputName)){
          Swal.fire({
            title: 'Failed!',
            text: 'Account has already existed.',
            icon: 'error'
          })
        }
      }else if(result&&result.body.length==0){
        Swal.fire({
          title: 'Successfully!',
          text: 'Account has been created.',
          icon: 'success'
        })
        this.seller.userSignUp(data);
        this.router.navigate([''])
      }
    })
  }

}




