import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceComponent } from './service/service.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private seller:ServiceComponent, private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.seller.isSignedIn){
       return true;
      }else{
        this.route.navigate([''])
        return false;
      }
  }
} 
