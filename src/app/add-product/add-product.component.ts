import { Product } from './../data-type';
import { Component, Injectable, OnInit } from '@angular/core';
import { AllProductsComponent } from '../all-products/all-products.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from '../service/service.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
@Injectable({
  providedIn: 'root',
})
export class AddProductComponent implements OnInit{
  addProductForm!: FormGroup<any> 

  constructor(
    private product: ServiceComponent,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      thumbnail: [''],
      banner: ['']
    })
  }
  get addProduct(){
    return this.addProductForm.controls;
  }

openAdd(data: Product) {
  this.product.addProduct(data).subscribe((result: any=[])=>{
    console.log(result);
    console.log(result.body)
  })

}  

}
