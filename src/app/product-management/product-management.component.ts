import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { RouterLink } from '@angular/router';
import { ViewProductComponent } from '../view-product/view-product.component';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    CommonModule,
    AddProductComponent,
    ViewProductComponent,
    RouterLink,
    ServiceComponent
  ],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent implements OnInit {
logOut() {
  this.service.logout();
}

  constructor(private service: ServiceComponent){}
  ngOnInit(): void {
  
  }
  submittedLogo=false;
  submittedAddNew=false;
  isLogoRotated: boolean = false;
  isAddNewRotated: boolean = false;
  isAdded: boolean = false;
  isViewed: boolean = false;
  openClick(action: string): void{
    if(action =='logo'){
      this.submittedLogo = !this.submittedLogo;
      this.isLogoRotated = !this.isLogoRotated;
    }else if(action == 'addNew'){
      this.submittedAddNew = !this.submittedAddNew;
      this.isAddNewRotated = !this.isAddNewRotated;
    }else if(action == 'addnew'){
      this.isAdded = true;
      this.isViewed = false;
    }else if(action == 'view'){
      this.isViewed = true;
      this.isAdded = false;
    }
    
  }

}


