import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../../models/User';
import { Room } from '../../models/Room';

// const devUrl = 'http://localhost:3000/api/room';
const devUrl = '/api/room';

@Injectable()
export class RoomService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllRoom(): Observable<any> {
    return this._http.get(`${devUrl}`);
  }

  getRoomById(id: number): Observable<any> {
    return this._http.get(`${devUrl}/${id}`);
  }

  getRoomByUser(user: User): Observable<any> {
    return this._http.get(`${devUrl}/users/${user}`);
  }

  getRoomCommune(idA: number, idB: number): Observable<any> {
    return this._http.get(`${devUrl}/userA/${idA}/userB/${idB}`);
  }

  createRoom(room: Room): Observable<any> {
    return this._http.post(`${devUrl}`, room);
  }

  updateRoom(room: Room): Observable<any> {
    return this._http.put(`${devUrl}`, room);
  }

}
