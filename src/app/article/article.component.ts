import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AllProductsComponent } from '../all-products/all-products.component';
import { PopularProductsComponent } from '../popular-products/popular-products.component';
import { FooterComponent } from '../footer/footer.component';
import { ViewProductComponent } from '../view-product/view-product.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    AllProductsComponent,
    PopularProductsComponent,
    FooterComponent,
    ViewProductComponent,
    
  ],
  host: {ngSkipHydration: 'true'},
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

}
