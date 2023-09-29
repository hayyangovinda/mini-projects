import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AiApiService {
  constructor(private http: HttpClient) {}

  apikey = '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';
  apiUrl = 'https://api.openai.com/v1/images/generations';

  generateAiImages(userPrompt: string, quantity: number) {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: `Bearer ${this.apikey}`,
    });

    const body = {
      prompt: userPrompt,
      n: quantity,
      size: '512x512',
      response_format: 'b64_json',
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      catchError((error) => {
        console.error('API error:', error);
        // Log the full response for debugging
        console.error('API response:', error.error);

        return throwError(
          'Failed to generate AI images. Make sure your API key is valid.'
        );
      }),
      map((response) => response.data)
    );
  }
}
