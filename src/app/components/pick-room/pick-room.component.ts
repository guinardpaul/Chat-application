import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

import { ChatService } from '../../services/chat/chat.service';
import { UserService } from '../../services/user/user.service';
import { FlashMsgService } from '../../services/flash-messages/flash-messages.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-pick-room',
  templateUrl: './pick-room.component.html',
  styleUrls: [ './pick-room.component.css' ]
})
export class PickRoomComponent implements OnInit, OnDestroy {
  // Change for test on several devis or PROD
  //socket = io('http://localhost:3000/');
  socket = io('http://192.168.0.15:3000/');

  username: string = '';
  user = new User();
  userLoggedIn: boolean;
  listUser: User[] = [];

  constructor(
    private _userService: UserService,
    private _flashMsg: FlashMsgService,
    private _router: Router
  ) { }

  onLogin() {
    // Verif input
    if (this.user.nickname.trim().length > 0) {
      // save user to database and on localStorage
      this.saveUser(this.user);
      // emit login to all users
      //this.socket.emit('login', this.user);
      // set select room view
      this.userLoggedIn = true;
    }
  }

  saveUser(user: User) {
    this._userService.saveUser(user)
      .subscribe(data => {
        this.user = data;
        localStorage.setItem('user', JSON.stringify(data));
      }, err => console.log(err)
      , () => this.socket.emit('login', this.user)
      )
  }

  updateStatusUser(id: number, user: User) {
    this._userService.updateStatus(id, user)
      .subscribe(data => {
        // TODO: add flash messages logout/login
      }, err => console.log(err)
      )
  }

  deleteUser(id: number) {
    this._userService.deleteUser(id)
      .subscribe(data => {
        console.log(data.message);
      }, err => console.log(err)
      )
  }

  // TODO:
  joinRoom() {

    this._router.navigate([ '/chat' ]);
  }

  getUserLoggedIn() {
    var userLogin: User[] = [];
    this._userService.getAllUser()
      .subscribe(data => {
        for (var u in data.obj) {
          if (data.obj.hasOwnProperty(u)) {
            if (data.obj[ u ].connected && data.obj[ u ].nickname !== JSON.parse(localStorage.getItem('user')).nickname) {
              userLogin.push(data.obj[ u ]);
            }
          }
        }
        this.listUser = userLogin;
      }, err => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    console.log(this.user);
    this.deleteUser(this.user._id);
    localStorage.removeItem('user');
    this.socket.emit('disconnect');
  }

  ngOnInit() {
    // On user Logged In
    this.socket.on('add-user', user => {
      this.getUserLoggedIn();
      console.log(localStorage);
      if (user.nickname !== this.user.nickname) {
        this._flashMsg.successMsg(user.nickname + ' s\'est connecté');
      }
    });

    // On user Logged Out
    this.socket.on('remove-user', () => {
      //this._flashMsg.successMsg(user.nickname + ' s\'est déconnecté');
      console.log(localStorage);
      // TODO: change delete pour update status user.connected quand Auth implementee
      //this.user.connected = false;
      //this.updateStatusUser(this.user._id, this.user);

      this.getUserLoggedIn();
      //this.listUser.splice(this.listUser.indexOf(this.user), 1);
    });

  }

}