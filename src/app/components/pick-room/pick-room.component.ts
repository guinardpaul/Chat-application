import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

import { ChatService } from '../../services/chat/chat.service';
import { UserService } from '../../services/user/user.service';

import { User } from '../../models/User';

@Component({
  selector: 'app-pick-room',
  templateUrl: './pick-room.component.html',
  styleUrls: [ './pick-room.component.css' ]
})
export class PickRoomComponent implements OnInit, OnDestroy {
  socket = io('http://localhost:3000/');
  username: string = '';
  user = new User();
  currentUser = new User();
  userLoggedIn: boolean;
  listUser: User[] = [];

  constructor(
    private _chatService: ChatService,
    private _userService: UserService,
    private _router: Router
  ) { }

  onLogin() {
    // Verif input
    if (this.user.nickname.trim().length > 0) {
      // save user to database and on localStorage
      this.saveUser(this.user);
      localStorage.setItem('user', JSON.stringify(this.user));
      // emit login to all users
      this.socket.emit('login', this.user);
      // set select room view
      this.userLoggedIn = true;
    }
  }

  saveUser(user: User) {
    this._userService.saveUser(user)
      .subscribe(data => {
        this.currentUser = data;
        /* if (JSON.parse(localStorage.getItem('user')).nickname !== data.nickname) {
          console.log('User add to listUser');
          this.listUser.push(data);
        } */
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
        console.log(this.listUser);
      }, err => {
        console.log(err);
      });
  }

  ngOnDestroy() {
    this.deleteUser(this.user._id);
    this.socket.emit('disconnect', this.user);
  }

  ngOnInit() {
    this.getUserLoggedIn();

    this.socket.on('add-user', user => {
      this.getUserLoggedIn();
    });

    this.socket.on('remove-user', user => {
      console.log('remove user');
      localStorage.removeItem('user');
      //this.user.connected = false;
      this.listUser.splice(this.listUser.indexOf(this.currentUser), 1);
    });

  }

}
