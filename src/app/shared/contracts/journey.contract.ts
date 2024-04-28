import {FlightContract} from "./flight.contract";

export interface JourneyContract{
  flights: FlightContract[];
  origin: string;
  destination: string;
  price: number;
}
