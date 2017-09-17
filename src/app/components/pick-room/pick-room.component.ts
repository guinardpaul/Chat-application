import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

import { ChatService } from '../../services/chat/chat.service';

@Component({
  selector: 'app-pick-room',
  templateUrl: './pick-room.component.html',
  styleUrls: [ './pick-room.component.css' ]
})
export class PickRoomComponent implements OnInit {
  socket = io('http://localhost:3000/');
  username: string;

  constructor(
    private _chatService: ChatService,
    private _router: Router
  ) { }

  submitUser() {
    if (this.username.trim().length > 0) {
      this.socket.emit('pick-username', this.username);
      localStorage.setItem('user', this.username);
      this._router.navigate([ '/chat' ]);
    }
  }

  ngOnInit() {
  }

}
