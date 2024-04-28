import {TransportContract} from "./transport.contract";

export interface FlightContract {
  origin: string;
  destination: string;
  price: number;
  transport: TransportContract;
}
