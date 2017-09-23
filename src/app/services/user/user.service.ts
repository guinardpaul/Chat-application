import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../../models/User';

const devUrl = 'http://localhost:3000/api/user/'

@Injectable()
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllUser(): Observable<any> {
    return this._http.get(devUrl);
  }

  saveUser(user): Observable<any> {
    return this._http.post(devUrl, user);
  }

  updateStatus(id: number, user): Observable<any> {
    return this._http.put(devUrl + id, user);
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(devUrl + id);
  }

}