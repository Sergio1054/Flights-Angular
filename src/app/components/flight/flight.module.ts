import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlightRoutingModule} from './flight-routing.module';
import {FlightIndexComponent} from './flight-index/flight-index.component';
import {FlightSearchComponent} from './flight-search/flight-search.component';
import {FlightListComponent} from './flight-list/flight-list.component';


@NgModule({
  declarations: [
    FlightIndexComponent,
    FlightSearchComponent,
    FlightListComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule
  ]
})
export class FlightModule {
}
