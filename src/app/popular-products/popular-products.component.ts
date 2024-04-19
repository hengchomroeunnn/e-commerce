import { Product } from './../data-type';
import { ServiceComponent } from './../service/service.component';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ViewdetailComponent } from '../viewdetail/viewdetail.component';
import { AllProductsComponent } from '../all-products/all-products.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { RecntProductComponent } from '../recnt-product/recnt-product.component';


@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ViewdetailComponent,
    RouterLink,
    ServiceComponent,
    AllProductsComponent,
    CarouselComponent,
    RecntProductComponent
  ],
  templateUrl: './popular-products.component.html',
  styleUrl: './popular-products.component.css'
})
export class PopularProductsComponent implements OnInit {
slickInit($event: Event) {
throw new Error('Method not implemented.');
}
breakpoint($event: Event) {
throw new Error('Method not implemented.');
}
afterChange($event: Event) {
throw new Error('Method not implemented.');
}
beforeChange($event: Event) {
throw new Error('Method not implemented.');
}
  products: any=[];
  singleProduct: any=[];
  foundItem: any;
  topView: any;
  headers= new HttpHeaders().set('Camtrade-Platform-Tenantid', 'default');
  topProducts: any=[];
slideConfig: any;
slides: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: ServiceComponent) {
}
  

  ngOnInit(): void {
    this.getTopView();
    this.fetchData();
  }

  fetchData(){
    this.service.listProduct().subscribe((product: any)=>{
      this.products = product.pageItems;

    })
  }

  getTopView(){
    const url ='https://cambodiatrade.com/camtrade-provider/api/v1/public/searches?pagination=true&offset=0&limit=50&orderBy=views&sortOrder=DESC';
    this.http.get(url,{ 'headers': this.headers }).subscribe((items: any=[])=>{

      console.log(items)
      // find item get top view
      this.topProducts= items.pageItems;
      this.topView = this.topProducts.reduce((prev: { views: number; }, current: { views: number; }) => {
        return (prev.views > current.views) ? prev : current;
      });

      console.log(this.topView)
      // this.foundItem = items.find((item: any) => item.id === topView);
    })
  }


}
