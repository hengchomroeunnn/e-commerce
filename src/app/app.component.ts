import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { FooterComponent } from './footer/footer.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { FormsModule } from '@angular/forms';
import { ProductManagementComponent } from './product-management/product-management.component';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent } from './article/article.component';

@Component({
    selector: 'app-root',
    standalone: true,
    host: { ngSkipHydration: 'true' },
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        AdminComponent,
        ArticleComponent,
        HeaderComponent,
        RouterOutlet,
        FooterComponent,
    ]
})
export class AppComponent {

}
