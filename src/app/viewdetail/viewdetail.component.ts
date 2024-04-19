import { ServiceComponent } from './../service/service.component';
import { routes } from './../app.routes';
import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { animate, style, transition, trigger } from '@angular/animations';
import { RelatedProductComponent } from '../related-product/related-product.component';

@Component({
  selector: 'app-viewdetail',
  standalone: true,
  imports: [
    SlickCarouselModule,
    ServiceComponent,
    CommonModule,
    RelatedProductComponent,
    RouterLink
  ],
  templateUrl: './viewdetail.component.html',
  styleUrl: './viewdetail.component.css',
})
export class ViewdetailComponent implements OnInit {

  headers= new HttpHeaders().set('Camtrade-Platform-Tenantid', 'default');
  productData: any;
  productID: any;
  qty_number=1;
  slides: any=[];

constructor (
  private route: ActivatedRoute,
  private service: ServiceComponent,
  private http: HttpClient,
  private elementRef: ElementRef){}

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    const productSlug = this.route.snapshot.paramMap.get('slug')
    productSlug&&this.service.getProduct(productSlug).subscribe((result: any)=>{
      this.productData=result;
      this.service.setProductID(this.productData.id);
      this.slides=result.imgCategoryData;
      console.log(this.slides)
    })
  }
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  changeImage() {
    this.slides.push({location})
  }
  

  productQty(value: any){
    if(this.qty_number<50 && value=='plus'){
      this.qty_number +=1;
    }else if(this.qty_number>0 && value=='minus'){
      this.qty_number-=1;
    }
  }
 

  // switchImage(id: string){
    
  //   this.previousImg=document.getElementsByClassName('thumbnail_img')[0]
  //   this.newImage = document.getElementById(id)
  //    if(id==this.getimgID){
  //         this.imgShowon=this.newImage;
  //         this.isShowImage=true;
  //    }else if(id=='thumbnail_img'){
  //         this.imgShowon=this.previousImg;
  //         this.isShowImage==true;
  //    }
  //    console.log(this.newImage)
  //    console.log(this.previousImg)
  //    console.log(this.imgShowon)
  // }

}
