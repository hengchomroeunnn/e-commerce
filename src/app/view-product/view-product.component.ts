import { Product } from './../data-type';
import { ServiceComponent } from '../service/service.component';
import { ProductManagementComponent } from './../product-management/product-management.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { title } from 'process';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [
    ProductManagementComponent,
    CommonModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit{
  products: any
  data: Product={
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: ''
  }
  constructor(private productService: ServiceComponent){}
  ngOnInit(): void {
   console.log(123)
  //  this.productService.getProduct(this.data).subscribe((result)=>{
  //   this.products = result;
  //   console.log(result)
  //  })
  }


 
}
