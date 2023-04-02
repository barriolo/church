import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.url;

  constructor(private router: Router, private http: HttpClient) {
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.URL}/auth/login`, {email, password});
  }

  setToken(accessToken: string) {
    localStorage.setItem('token', accessToken)
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
