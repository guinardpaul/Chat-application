import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '@sharedModels/User';

// const devUrl = '/api/users';
const devUrl = 'http://localhost:3000/api/';

@Injectable()
export class AuthenticationService {
  private headers: HttpHeaders;
  private authToken: string;

  constructor(
    private _http: HttpClient
  ) { }

  createAuthenticationHeaders() {
    this.getToken();
    this.headers = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': this.authToken
    });
  }

  getToken() {
    this.authToken = localStorage.getItem('token');
  }

  storeUserData(token: string, user: User) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  register(user: User): Observable<any> {
    return this._http.post(`${devUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    return this._http.post(`${devUrl}/login`, user);
  }

  getProfile(): Observable<any> {
    this.createAuthenticationHeaders();
    return this._http.get(`${devUrl}/profile`, { headers: this.headers });
  }

}
