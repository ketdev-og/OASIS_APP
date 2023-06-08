import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/food/search/search.component';
import { RestaurantComponent } from './components/food/restaurant/restaurant.component';


const appRoute:Routes = [
    {path: 'city/search', component:SearchComponent},
    {path: 'restaurant/:id', component: RestaurantComponent} 
]
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
