import { Component, OnInit, inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ViewdetailComponent } from '../viewdetail/viewdetail.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    HttpClientModule,
    RouterLink,
    ViewdetailComponent
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  allProducts: any=[];
  headers= new HttpHeaders().set('Camtrade-Platform-Tenantid', 'default');

ngOnInit(): void {
  this.fetchAllProducts();
}
constructor(private http: HttpClient){}

fetchAllProducts(){
  const url ='https://cambodiatrade.com/camtrade-provider/api/v1/public/searches?pagination=true&offset=0&limit=50&orderBy=views&sortOrder=DESC';
  this.http.get(url,{ 'headers': this.headers }).subscribe((allproducts: any)=>{
    this.allProducts= allproducts.pageItems;
  })
}

}
