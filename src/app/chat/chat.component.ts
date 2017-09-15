import { Component, OnInit } from '@angular/core';
import * as io from "socket.io-client";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  socket = io.connect('http://localhost:3000/');
  username: string;

  submitUser() {
    this.socket.emit('pick-username', this.username);
    console.log(this.username);
  }
  

  constructor() { }

  ngOnInit() {
    this.socket.on('alert-connection', (data) => {
      console.log(data + ' connecté');
    });
  }

}
