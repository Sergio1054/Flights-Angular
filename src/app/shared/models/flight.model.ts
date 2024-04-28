import {Transport} from "./transport.model";
import {FlightContract} from "@contracts/flight.contract";

export class Flight {
  origin: string;
  destination: string;
  price: number;
  transport: Transport;

  constructor(origin: string, destination: string, price: number, transport: Transport) {
    this.origin = origin;
    this.destination = destination;
    this.price = price;
    this.transport = transport;
  }

  get completeName(): string{
    return `${this.origin} - ${this.destination}`;
  }
  static fromContractToModel(flight: FlightContract): Flight {
    return new Flight(
      flight.origin,
      flight.destination,
      flight.price,
      Transport.fromContractToModel(flight.transport)
    );
  }

}
