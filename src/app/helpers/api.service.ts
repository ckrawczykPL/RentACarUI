import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',  // Make the service available application-wide
})
export class ApiService {

  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error || error);
  }

  get(path: string, data = {}): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params: data })
        .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${environment.api_url}${path}`, JSON.stringify(body))
        .pipe(catchError(this.formatErrors));
  }

  patch(path: string, body: Object = {}): Observable<any> {
    return this.http.patch(`${environment.api_url}${path}`, JSON.stringify(body))
        .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body))
        .pipe(catchError(this.formatErrors));
  }

  delete(path: string, data?): Observable<any> {
    const requestOptions = {
      params: new HttpParams(),
      body: data
    };

    return this.http.delete(`${environment.api_url}${path}`, requestOptions)
        .pipe(catchError(this.formatErrors));
  }
}
