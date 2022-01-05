import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  // Global News Endpoint
  globalNewsUrl =
    'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e24581c7b11b48aaa42a1cd064e5a204';

  getGlobalNews(): Observable<any> {
    return this.http.get(this.globalNewsUrl);
  }

  // Global News Endpoint
  spanishlNewsUrl =
    'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e24581c7b11b48aaa42a1cd064e5a204';

  getSpanishNews(): Observable<any> {
    return this.http.get(this.spanishlNewsUrl);
  }
}
