import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  carousel: any;
  headers= new HttpHeaders().set('Camtrade-Platform-Tenantid', 'default');

  constructor(
    private http: HttpClient
  ){}
  
  ngOnInit(): void {
       this.getCarousel();
  }

  getCarousel(){
    const url = 'https://cambodiatrade.com/camtrade-provider/api/v1/public/stores?pagination=true&orderBy=id&sortOrder=DESC&isFeatured=true&limit=3';
    this.http.get(url, { 'headers': this.headers }).subscribe((item: any)=>{
      this.carousel = item.pageItems;
    });
  }
}
