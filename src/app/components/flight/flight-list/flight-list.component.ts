import {Component, Input} from '@angular/core';
import {Journey} from "@models/journey.model";
import {Flight} from "@models/flight.model";
import {Transport} from "@models/transport.model";

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent {

  @Input()
  journeys: Journey[] = [];


  constructor() {
    const transport1 = new Transport('AV', '001');
    const transport2 = new Transport('AV', '002');
    const flights = [new Flight('MZL', 'PEI', 500, transport1),
      new Flight('PEI', 'BOG', 500, transport2)];
    const journey = new Journey(flights, 'MZL','BOG', 1000);
    this.journeys = [journey, journey, journey, journey, journey]
  }
}
