import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Restaurant } from '../interface/restaurant';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  searchResturantsByCity(city:String): Observable<Restaurant[]>{
      return this.http.get<Restaurant[]>(`http://localhost:9000/osasi/api/v1/restaurant/city?cityName=${city}`);
  }

  getRestaurant(id:Number): Observable<Restaurant>{
    return this.http.get<Restaurant>(`http://localhost:9000/osasi/api/v1/restaurant/${id}`);
}
}
