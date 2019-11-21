import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BASE_HTTP_OPTIONS, BASE_URL } from './api-list';
import { PredictionResult } from '../types';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  constructor(private http: HttpClient) { }

  serverCheck(): Observable<{}> {
    return this.http.get<{}>(BASE_URL, BASE_HTTP_OPTIONS);
  }

  predict(params: {}): Observable<PredictionResult> {
    return this.http.post<PredictionResult>(`${BASE_URL}/predict`, params, BASE_HTTP_OPTIONS);
  }

  feedback(params: {}): Observable<any> {
    return this.http.post<PredictionResult>(`${BASE_URL}/feedback`, params, BASE_HTTP_OPTIONS);
  }
}
