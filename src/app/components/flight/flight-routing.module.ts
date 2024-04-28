import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FlightIndexComponent} from "src/app/components/flight/flight-index/flight-index.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'index',
        component: FlightIndexComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule {
}
