import { Component } from '@angular/core';
import { ProductManagementComponent } from '../product-management/product-management.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    ProductManagementComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
