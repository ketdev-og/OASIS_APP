import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'oasis_app';

  constructor(private router: Router){}


  ngOnInit(): void {
   
  }
  

  

  getCity(city:String){
    this.router.navigate(
      ['/city/search'],
      { queryParams: { cityName: city } }
    );
  }
}
