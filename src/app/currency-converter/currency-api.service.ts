import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CurrencyApiService {
  constructor(private http: HttpClient) {}

  apiUrl =
    'https://v6.exchangerate-api.com/v6/8cc1c3e53f5b39f4f6c2badb/latest/';

  getData(currencyFrom: string) {
    return this.http.get(this.apiUrl + currencyFrom);
  }
}
