import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EngDictionaryService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  getData(word: string) {
    return this.http.get(this.apiUrl + word);
  }
}
