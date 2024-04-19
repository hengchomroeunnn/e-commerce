import { Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { PopularProductsComponent } from './popular-products/popular-products.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent } from './article/article.component';
import { AuthGuard } from './auth.guard';
import { ServiceComponent } from './service/service.component';

export const routes: Routes = [
    {
        path: 'home', component: PopularProductsComponent,
    },
    {
        path: '', component: PopularProductsComponent,
    },
    {
        path:'view-detail/:slug', component: ViewdetailComponent,

    },
    {
        path:'carousel', component: CarouselComponent
    },
    {
        path:'signUp', component: SignupComponent,
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'product-management', component: ProductManagementComponent,
       
    },
    {
        path: 'product-management/add-product', component: ProductManagementComponent,
       
    },
    {
        path: 'product-management/view-product', component: ProductManagementComponent
    }
];
