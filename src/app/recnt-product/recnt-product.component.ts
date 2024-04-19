import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ViewdetailComponent } from '../viewdetail/viewdetail.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recnt-product',
  standalone: true,
  imports: [
    CommonModule,
    ViewdetailComponent,
    RouterLink
  ],
  templateUrl: './recnt-product.component.html',
  styleUrl: './recnt-product.component.css'
})
export class RecntProductComponent implements OnInit {
  allData: any;
  headers= new HttpHeaders().set('Camtrade-Platform-Tenantid', 'default');

  ngOnInit(): void {
    this.fetchNewData();
  }
  
constructor(private http: HttpClient){}

  fetchNewData(){
    const url ='https://cambodiatrade.com/camtrade-provider/api/v1/public/searches?pagination=true&offset=0&limit=8&orderBy=id&sortOrder=DESC';
    this.http.get(url,{ 'headers': this.headers }).subscribe((data: any)=>{
      this.allData= data.pageItems;
    })
  }
  
}
