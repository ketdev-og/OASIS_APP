import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/interface/restaurant';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
})
export class RestaurantComponent implements OnInit {
  Restaurant : Restaurant | undefined;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    const restId = this.route.snapshot.params['id'];
    this.getRestaurant(restId);
  }

  getRestaurant(id: Number): void {
    this.apiService.getRestaurant(id).subscribe({
      next: (response: Restaurant) => {
        this.Restaurant=response
        console.log(this.Restaurant);
        return this.Restaurant
      },
      error: (error: any) => console.log(error),
      complete: () => console.log(`done getting restaurants`),
    });
  }
}
