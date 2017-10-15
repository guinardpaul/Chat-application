import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Models
import { User } from '@sharedModels/User';

// const devUrl = '/api/users';
const devUrl = 'http://localhost:3000/api/';

@Injectable()
export class UserService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllUser(): Observable<any> {
    return this._http.get(`${devUrl}/users`);
  }

  getOneUserById(id: number): Observable<any> {
    return this._http.get(`${devUrl}/users/${id}`);
  }

  getOneUserByNickname(nickname: string): Observable<any> {
    return this._http.get(`${devUrl}/users/nickname/${nickname}`);
  }

  updateUser(id: number, user): Observable<any> {
    return this._http.put(`${devUrl}/users/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`${devUrl}/users/${id}`);
  }

}
