import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealApiService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

  getData(word: string) {
    return this.http.get(this.apiUrl + word);
  }
}
