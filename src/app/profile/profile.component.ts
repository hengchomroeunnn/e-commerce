import { SignIn, signUp } from './../data-type';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from '../service/service.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  historyData: any[] | undefined;

  constructor(private service: ServiceComponent, private route: Router){}

  ngOnInit(): void{
    this.getHistoryData();
  }
  
  getHistoryData(){
    this.historyData=this.service.getOrderHistory();
    console.log(this.historyData)
  }

}




