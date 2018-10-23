import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = "http://localhost:4343/feedback";
  }
  getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }
  addFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.post(this.baseUrl, JSON.stringify(feedback),
      this.getJsonContentTypeHeader()).pipe(map(data => data.json())
      );
  }
  getFeedbackById(id: number): Observable<Feedback> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }
}
