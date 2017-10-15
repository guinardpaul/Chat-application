import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '@sharedModels/User';

// const devUrl = '/api/users';
const devUrl = 'http://localhost:3000/api/';

@Injectable()
export class AuthenticationService {

  constructor(
    private _http: HttpClient
  ) { }

  register(user: User): Observable<any> {
    return this._http.post(`${devUrl}/register`, user);
  }

  login(user: User): Observable<any> {
    return this._http.post(`${devUrl}/login`, user);
  }

}
