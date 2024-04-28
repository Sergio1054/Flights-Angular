import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'flights',
    loadChildren: () => import('./components/flight/flight.module').then(f => f.FlightModule)
  },
  {
    path: '**',
    redirectTo: 'flights/index',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
