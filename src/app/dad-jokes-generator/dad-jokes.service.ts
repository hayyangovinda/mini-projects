import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DadJokesService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://api.api-ninjas.com/v1/dadjokes';

  apiKey = 'L4pyqEhhqEKcy9zohmOcrg==v9ag2V6gbQqXfy1x';

  getData(limit: number = 1) {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });

    const params = {
      limit: limit.toString(),
    };
    return this.http.get(this.apiUrl, { headers, params });
  }
}
