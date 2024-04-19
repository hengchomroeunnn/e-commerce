import { SignIn, signUp } from './../data-type';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { AllProductsComponent } from '../all-products/all-products.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignupComponent } from '../signup/signup.component';
import { ProfileComponent } from '../profile/profile.component';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ServiceComponent } from '../service/service.component';
import Swal from 'sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';
import { Injectable } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [
        AllProductsComponent,
        RouterLink,
        CommonModule,
        HttpClientModule,
        SignupComponent,
        ProfileComponent,
        FormsModule,
        ReactiveFormsModule,
        FooterComponent,
        RouterOutlet
    ]
})
@Injectable({
  providedIn: 'root',
})

export class HeaderComponent implements OnInit {

 
  isLoginError= new EventEmitter<boolean>(false)
  signInForm!: FormGroup;
  loadData: any=[];
  isSignedIn= false;
  isShow = false;
  
  constructor(private seller: ServiceComponent, private formbuilder: FormBuilder, private router: Router){}

ngOnInit() {
  this.seller.reloadSeller();
  this.signInForm= this.formbuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@\#\$%\^\&\*\(\)_\-\+=\[\]\{\};:'",.<>\/?\\|])[A-Za-z\d!@\#\$%\^\&\*\(\)_\-\+=\[\]\{\};:'",.<>\/?\\|]{8,32}$/)]]
  })
}

get logInData(){
  return this.signInForm.controls;
}


signIn(data: SignIn){
   const inputPassword= data.password;
   const inputEmail = data.email;
   console.log(this.loadData)

  this.seller.getUserData(data).subscribe((result: any=[])=>{
    console.log(result)
    console.log(result.body)
 

   if(result&&result.body.length==1){
    if((result && result.body[0]['password']==inputPassword) && (result && result.body[0]['email']==inputEmail) && result.body[0]['status']=='customer'){
      Swal.fire({
        title: 'Login Successfully!',
        text: 'You are a customer now.',
        icon: 'success'
      })
      this.isShow = true;
      this.seller.userSignIn(data);
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['']);
    }else if((result && result.body[0]['password']==inputPassword) && (result && result.body[0]['email']==inputEmail) && result.body[0]['status']=='seller'){
      Swal.fire({
        title: 'Login Successfully!',
        text: 'You are a seller now.',
        icon: 'success'
      })
      this.isSignedIn = !this.isSignedIn;
      this.seller.userSignIn(data);
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['product-management']);
    }
   }else if(result&& result.body.length==0){
    Swal.fire({
      title: 'Failed!',
      text: 'Email or Password is not match.',
      icon: 'error'
    })
    this.isSignedIn = false;
    this.router.navigate([''])
    }else{
      this.isSignedIn=false
    }
  })
 }

 logOut(){
   this.seller.logout();
   this.isSignedIn=false;
  }
}
