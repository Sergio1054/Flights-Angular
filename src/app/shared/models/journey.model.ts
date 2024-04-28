import {Flight} from "./flight.model";
import {JourneyContract} from "@contracts/journey.contract";

export class Journey{
  flights: Flight[];
  origin: string;
  destination: string;
  price: number;


  constructor(flights: Flight[], origin: string, destination: string, price: number) {
    this.flights = flights;
    this.origin = origin;
    this.destination = destination;
    this.price = price;
  }

  get completeName(): string{
    return `${this.origin} - ${this.destination}`;
  }

  static fromContractToModel(journey: JourneyContract): Journey {
    return new Journey(
      journey.flights.map((f)=> Flight.fromContractToModel(f)),
      journey.origin,
      journey.destination,
      journey.price

    );
  }
}
