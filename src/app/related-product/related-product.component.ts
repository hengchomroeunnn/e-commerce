import { Component, Input, OnInit } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-related-product',
  standalone: true,
  imports: [
    ServiceComponent,
    CommonModule,
    ViewProductComponent,
    RouterLink
  ],
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.css'
})
export class RelatedProductComponent implements OnInit{
  // @Input() dataFromView: any;
  relatedItem: any;
  productID: any;

  constructor(
    private service: ServiceComponent, 
    private route: ActivatedRoute){}

  ngOnInit(): void {
   this.relatedProduct();
  }
  
  relatedProduct(){
    this.service.getProductID().subscribe((rs)=>{
      this.productID=rs.id;
      this.service.getRelatedProduct(this.productID).subscribe((result)=>{
       this.relatedItem=result;
      })
    });

  
  }
}
