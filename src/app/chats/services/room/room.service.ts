import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Room } from '@sharedModels/Room';
import { Chat } from '@sharedModels/Chat';

const devUrl = 'http://localhost:3000/api/room';
// const devUrl = '/api/room';

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

  getRoomByUser(user_id: number): Observable<any> {
    return this._http.get(`${devUrl}/user/${user_id}`);
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
