import {TransportContract} from "@contracts/transport.contract";

export class Transport{
  flightCarrier: string;
  flightNumber: string;


  constructor(flightCarrier: string, flightNumber: string) {
    this.flightCarrier = flightCarrier;
    this.flightNumber = flightNumber;
  }
  get completeName(): string{
    return `${this.flightCarrier} ${this.flightNumber}`;
  }

  static fromContractToModel(transport: TransportContract): Transport {
    return new Transport(
      transport.flightCarrier,
      transport.flightNumber

    );
  }

}
