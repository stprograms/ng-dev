import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RatesResponse } from './RatesResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  // For current currency data use https://fixer.io
  // Register your own key and use:
  // url = `http://data.fixer.io/api/latest?access_key=${environment.fixerAPIKey}`;

  url = environment.fixerApi;
  rates: Map<string, number>;

  constructor(private httpClient: HttpClient) {}

  getRates(): Observable<RatesResponse> {
    return this.httpClient.get<RatesResponse>(this.url);
  }
}
