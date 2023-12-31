import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryGuideService {
  constructor(private http: HttpClient) {}

  fetchData(countryName: string) {
    return this.http.get(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
  }
}
