import { Component, OnInit } from "@angular/core";
import * as io from "socket.io-client";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  socket = io("http://localhost:3000/");
  nickname: String;
  listMessages: any[] = [];
  message: String;

  constructor() {}

  sendMessage() {
    this.socket.emit("send-message", {
      nickname: this.nickname,
      message: this.message
    });
    this.message = "";
  }

  ngOnInit() {
    this.nickname = localStorage.getItem("user");
    this.socket.on("new-message", data => {
      this.listMessages.push({
        nickname: data.nickname,
        message: data.message
      });
    });

    console.log(localStorage);
  }
}
