import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  URL = environment.url;

  constructor(private router: Router, private http: HttpClient) {
  }

  createGuest(payload: any): Observable<any> {
    return this.http.post(`${this.URL}/guest`, payload);
  }

  getGuest(): Observable<any> {
    return this.http.get(`${this.URL}/guest`);
  }
}
