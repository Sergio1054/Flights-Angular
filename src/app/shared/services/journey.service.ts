import {Injectable} from "@angular/core";
import {Journey} from "@models/journey.model";
import {environment} from "@environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {JourneyContract} from "@contracts/journey.contract";

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  private baseUrl = `${environment.coreUrl}/api/journeys`;

  constructor(private http: HttpClient) {
  }

  all(): Promise<Journey[]> {
    return new Promise((resolve, reject) => {
      this.http
        .get<JourneyContract[]>(this.baseUrl, {})
        .pipe(
          map((response) => {
            return response.map((j) => Journey.fromContractToModel(j));
          })
        )
        .subscribe({
          next: (data) => {
            resolve(data);
          },
          error: (error) => {
            reject(error);
          },
        });
    });
  }
}
