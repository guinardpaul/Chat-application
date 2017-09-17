import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-widget-chat',
  templateUrl: './widget-chat.component.html',
  styleUrls: [ './widget-chat.component.css' ]
})
export class WidgetChatComponent implements OnInit {
  socket = io('http://localhost:3000/');
  nickname: String;
  listMessages: any[] = [];
  message: String;

  constructor() { }

  sendMessage() {
    const now = Date.now();
    console.log(now);
    this.socket.emit('send-message', { nickname: this.nickname, message: this.message, date: now });
    this.message = '';
  }

  ngOnInit() {
    this.nickname = localStorage.getItem('user');
    this.socket.on('new-message', (data) => {
      this.listMessages.push({ nickname: data.nickname, message: data.message, date: data.date });
    });
  }


}
