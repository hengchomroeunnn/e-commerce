import { Component, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Product, SignIn, signUp } from '../data-type';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})

@Injectable({
  providedIn: 'root',
})

export class ServiceComponent {

  isSignedIn= new BehaviorSubject<boolean>(false);
  isSignInError = new EventEmitter<boolean>(false);
  headers= new HttpHeaders().set('Camtrade-Platform-Tenantid', 'default');
  private productId = new Subject<any>();


  constructor(
    private http: HttpClient,
    private router: Router,
    
    ){}
  userSignUp(data: signUp){
    return this.http.post('http://localhost:3000/register', data,{observe: 'response'}).subscribe((result)=>{
      console.log(result);
      if(result && result.body){
      localStorage.setItem('user',JSON.stringify(result.body))
      this.router.navigate(['']);
     }
    })
  }

  reloadSeller(){
    if(localStorage.getItem('user')){
      this.isSignedIn.next(true)
      this.router.navigate([''])
    }
  }

  getUserData(data: any): Observable<any> {
    console.log(data);
    return this.http.get(`http://localhost:3000/register`, { 
      params: { email: data.email, password: data.password}, 
      observe: 'response'
    });
  }

  userSignIn(data: SignIn){
    return this.http.post('http://localhost:3000/login', data, {observe: 'response'}).subscribe((result)=>{
      console.log(result)
    })
  }

  addProduct(data: Product){
    return this.http.post('http://localhost:3000/products', data, {observe: 'events'})
  }
  listProduct(){
    const url ='https://cambodiatrade.com/camtrade-provider/api/v1/public/item/specialoffers?pagination=true&limit=50&orderBy=random&sortOrder=ASC';
    return this.http.get(url,{ 'headers': this.headers });
  }

  getProduct(data: any){
    const url ='https://cambodiatrade.com/camtrade-provider/api/v1/public/item/'+data;
    return this.http.get(url,{ 'headers': this.headers });
  }

  getRelatedProduct(data: any){
    const url='https://cambodiatrade.com/camtrade-provider/api/v1/public/item/'+data+'/relatedpost?pagination=false&limit=30&orderBy=id&sortOrder=DESC';
    return this.http.get(url, { 'headers': this.headers })
  }

  setProductID(value: any){
    this.productId.next({id: value});
  }
  getProductID(): Observable<any>{
    return this.productId.asObservable();
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate([''])

  }
  
}

