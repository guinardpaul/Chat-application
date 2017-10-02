import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';

import { ChatService } from '../../services/chat/chat.service';
import { UserService } from '../../services/user/user.service';
import { RoomService } from '../../services/room/room.service';
import { FlashMsgService } from '../../services/flash-messages/flash-messages.service';

import { User } from '../../models/User';
import { Chat } from '../../models/Chat';
import { Room } from '../../models/Room';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: [ './chat-room.component.css' ]
})
export class ChatRoomComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  // socket = io('http://localhost:3000/');
  socket = io('http://192.168.0.15:3000/');
  id_room: number;
  room = new Room();
  chat = new Chat();
  nickname: string;
  user = new User();
  listMessages: any[] = [];
  message = '';

  constructor(
    private _chatService: ChatService,
    private _roomService: RoomService,
    private _userService: UserService,
    private _flashMsg: FlashMsgService,
    private _router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  /**
   * On SendMessage :
   * - save Chat to database
   * - emit send-message au server
   *
   * @memberof ChatRoomComponent
   */
  sendMessage() {
    if (this.message.trim().length > 0) {
      const now = new Date(Date.now());
      this.chat = {
        room: this.room,
        nickname: this.user.nickname,
        message: this.message,
        updated_at: now
      };

      this.saveChat(this.chat);
      this.socket.emit('send-message', this.chat);

      this.message = '';
    }
  }

  /**
   * Save chat
   *
   * @param {Chat} chat chat body
   * @memberof ChatRoomComponent
   */
  saveChat(chat: Chat) {
    this._chatService.saveMessage(chat)
      .subscribe(data => {
        console.log(data);
      }, err => console.log(err)
      );
  }

  /**
   * Get room by id
   *
   * @param {number} id room id
   * @memberof ChatRoomComponent
   */
  getRoomById(id: number) {
    this._roomService.getRoomById(id)
      .subscribe(data => {
        console.log(data);
        this.room = data.obj;
        this.getChatByRoom(data.obj);
      });
  }

  /**
   * Get Chat by room
   *
   * @param {Room} room room body
   * @memberof ChatRoomComponent
   */
  getChatByRoom(room: Room) {
    this._chatService.getChatByRoom(room)
      .subscribe(data => {
        console.log(data);
        this.listMessages = data.obj;
      });
  }

  /**
   * On Logout :
   * - emit send-message au server
   * - redirect to pick-room
   *
   * @memberof ChatRoomComponent
   */
  onLogout() {
    const now = Date.now();
    // Envoi message user déconnecté à tous les autres utilisateurs
    this.socket.emit('send-message', {
      nickname: this.nickname,
      message: this.nickname + ' s\'est déconnecté',
      date: now
    });
    // Enleve user du localStorage
    // localStorage.removeItem('user');
    // Renvoi vers route /pick-roomq²
    this._router.navigate([ '/pick-room' ]);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  ngOnInit() {
    // Set this.user par le sessionStorage
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.nickname = this.user.nickname;

    // Get Room
    if (this.activatedRoute.snapshot.params[ 'id' ] !== undefined) {
      this.id_room = this.activatedRoute.snapshot.params[ 'id' ];
      this.getRoomById(this.id_room);
    }

    // Function appelee a chaque fois qu'un utilisateur
    // envoi un message au server via la methode emit('send-message')
    this.socket.on('new-message', data => {
      this.listMessages.push(data);
      this.scrollToBottom();
    });
    this.scrollToBottom();
  }

}
