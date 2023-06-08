import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/interface/restaurant';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  RestaurantList: any = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.onGetUsers(params['cityName']);
      console.log(this.RestaurantList);
    });
  }

  onGetUsers(city: String): void {
    this.apiService.searchResturantsByCity(city).subscribe({
      next: (response: Restaurant[]) => (this.RestaurantList = response),
      error: (error: any) => console.log(error),
      complete: () => console.log(`done getting restaurants`),
    });
  }

  getRestaurant(id: Number): void {
    this.apiService.getRestaurant(id).subscribe({
      next: (response: Restaurant) => (this.RestaurantList = response),
      error: (error: any) => console.log(error),
      complete: () => console.log(`done getting restaurants`),
    });
  }
}
