import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const devUrl = 'http://localhost:3000/api/chat/'

@Injectable()
export class ChatService {

  constructor(
    private _http: HttpClient
  ) { }

  getAllUser(): Observable<any> {
    return this._http.get(devUrl);
  }

}
