import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: [ './chat-room.component.css' ]
})
export class ChatRoomComponent implements OnInit {
  socket = io('http://localhost:3000/');
  nickname: String;
  listMessages: any[] = [];
  message: String = '';

  constructor(
    private _router: Router
  ) { }

  sendMessage() {
    if (this.message.trim().length > 0) {
      const now = Date.now();

      this.socket.emit('send-message', {
        nickname: this.nickname,
        message: this.message,
        date: now
      });

      this.message = '';
    }
  }

  onLogout() {
    const now = Date.now();
    // Envoi message user déconnecté à tous les autres utilisateurs
    this.socket.emit('send-message', {
      nickname: this.nickname,
      message: this.nickname + ' s\'est déconnecté',
      date: now
    });
    // Enleve user du localStorage
    localStorage.removeItem('user');
    // Renvoi vers route /pick-room
    console.log(localStorage);
    this._router.navigate([ '/pick-room' ]);
  }

  ngOnInit() {
    // Recupere nickname from localStorage
    this.nickname = localStorage.getItem('user');

    // Function appelee a chaque fois qu'un utilisateur 
    // envoi un message au server via la methode emit('send-message')
    this.socket.on('new-message', data => {
      this.listMessages.push({
        nickname: data.nickname,
        message: data.message,
        date: data.date
      });
    });
  }
}
