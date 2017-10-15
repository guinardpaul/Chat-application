import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Models
import { Room } from '@sharedModels/Room';
import { Chat } from '@sharedModels/Chat';

const devUrl = 'http://localhost:3000/api/chat';
// const devUrl = '/api/chat';

@Injectable()
export class ChatService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllUser(): Observable<any> {
    return this._http.get(`${devUrl}`);
  }

  getAllChatByNickname(nickname: string): Observable<any> {
    return this._http.get(`${devUrl}/nickname/${nickname}`);
  }

  getChatByRoom(room: Room): Observable<any> {
    return this._http.get(`${devUrl}/room/${room._id}`);
  }

  saveMessage(chat: Chat): Observable<any> {
    return this._http.post(`${devUrl}`, chat);
  }

  getChatByNickname(nickname: string): Observable<any> {
    return this._http.get(`${devUrl}/nickname/${nickname}`);
  }

}
