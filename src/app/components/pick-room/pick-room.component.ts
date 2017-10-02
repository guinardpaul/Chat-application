import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

import { ChatService } from '../../services/chat/chat.service';
import { UserService } from '../../services/user/user.service';
import { RoomService } from '../../services/room/room.service';
import { FlashMsgService } from '../../services/flash-messages/flash-messages.service';

import { User } from '../../models/User';
import { Room } from '../../models/Room';

@Component({
  selector: 'app-pick-room',
  templateUrl: './pick-room.component.html',
  styleUrls: [ './pick-room.component.css' ]
})
export class PickRoomComponent implements OnInit {
  // Change for test on several device or PROD
  // socket = io('http://localhost:3000/');
  socket = io('http://192.168.0.15:3000/');

  nickname: string;
  roomCommune;
  user = new User();
  selectedUsers = new Array<User>();
  users = new Array<User>();
  userLoggedIn: boolean;
  listUser = new Array<User>();

  constructor(
    private _userService: UserService,
    private _chatService: ChatService,
    private _roomService: RoomService,
    private _flashMsg: FlashMsgService,
    private _router: Router
  ) { }

  /**
   * On login : called when user enter a nickname
   *
   * @memberof PickRoomComponent
   */
  onLogin() {
    // Verif input
    if (this.user.nickname.trim().length > 0) {
      // save user to database and on sessionStorage
      this.user.connected = true;
      this.user.updated_at = new Date(Date.now());
      this.saveUser(this.user);
      // set select room view
      this.userLoggedIn = true;
    }
  }

  /**
   * Save user on Login and emit login => trigger add-use
   *
   * @param {User} user user body
   * @memberof PickRoomComponent
   */
  saveUser(user: User) {
    this._userService.saveUser(user)
      .subscribe(data => {
        this.user = data.obj;
        console.log('User saved to database');
        sessionStorage.setItem('user', JSON.stringify(data.obj));
      }, err => console.log(err)
      , () => this.socket.emit('login', this.user)
      );
  }

  updateStatusUser(id: number, user: User) {
    this.user.connected = false;
    this._userService.updateStatus(id, user)
      .subscribe(data => {
        // TODO: add flash messages logout/login
      }, err => console.log(err)
      );
  }

  deleteUser(id: number) {
    this._userService.deleteUser(id)
      .subscribe(data => {
        console.log(data.message);
        // TODO: add flash messages logout/login
      }, err => console.log(err)
      );
  }

  joinRoom() {
    // Check si room between the two users exists
    // Get User B information
    let userB = new User();
    userB = this.selectedUsers[ 0 ];
    this.getRoomCommuneTwoUsers(this.user._id, userB._id);

    setTimeout(() => {
      if (this.roomCommune.success) {
        setTimeout(() => {
          this._router.navigate([ '/room', this.roomCommune.obj._id ]);
        }, 1000);
      } else {
        // Room doesn't exists => Create room
        // create roomName based on users nickname
        this.selectedUsers.push(this.user);
        let roomName = '';
        for (const user in this.selectedUsers) {
          if (this.selectedUsers.hasOwnProperty(user)) {
            roomName += this.selectedUsers[ user ].nickname;
          }
        }
        const room = {
          name: roomName,
          users: this.selectedUsers
        };

        this.saveRoom(room);
      }
      const now = new Date(Date.now());
      const joinMsg = {
        nickname: this.user.nickname,
        message: this.user.nickname + ' s\'est connecté',
        updated_at: now
      };

      this.socket.emit('send-message', joinMsg);
    }, 2000);

  }

  saveRoom(room: Room) {
    this._roomService.createRoom(room)
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('room', JSON.stringify(data.obj._id));
      });

    setTimeout(() => {
      this._router.navigate([ '/room', JSON.parse(localStorage.getItem('room')) ]);
    }, 1000);
  }

  getRoomCommuneTwoUsers(idA: number, idB: number) {
    return this._roomService.getRoomCommune(idA, idB)
      .subscribe(data => {
        console.log(data);
        this.roomCommune = data;
      }, err => console.log(err)
      );
  }

  getOneUser(id): User {
    let userB = new User();
    this._userService.getOneUserById(id)
      .subscribe(data => {
        console.log(data);
        userB = data.obj;
      }, err => console.log(err)
      );
    return userB;
  }

  getUserLoggedIn(): User[] {
    const userLogin: User[] = [];
    this._userService.getAllUser()
      .subscribe(data => {
        console.log(data);
        for (const u in data.obj) {
          if (data.obj.hasOwnProperty(u)) {
            if (data.obj[ u ].connected && data.obj[ u ].nickname !== JSON.parse(sessionStorage.getItem('user')).nickname) {
              userLogin.push(data.obj[ u ]);
            }
          }
        }
        this.listUser = userLogin;
      }, err => {
        console.log(err);
      });
    return this.listUser;
  }

  /* ngOnDestroy() {
    this.deleteUser(JSON.parse(sessionStorage.getItem('user'))._id);
    //this.updateStatusUser()
    sessionStorage.removeItem('user');
    this.socket.emit('disconnect');
  } */

  onUsersSelected(user: User) {
    if (this.selectedUsers.indexOf(user) !== -1) {
      this.selectedUsers.splice(this.selectedUsers.indexOf(user), 1);
    } else {
      this.selectedUsers.push(user);
    }
    console.log(this.selectedUsers);
  }

  ngOnInit() {
    // Test si sessionStorage contient user
    if (sessionStorage.length > 0) {
      this.userLoggedIn = true;
      this.user = JSON.parse(sessionStorage.getItem('user'));
      this.getUserLoggedIn();
    }

    // On user Logged In
    this.socket.on('add-user', user => {
      this.getUserLoggedIn();
      console.log(user);
      if (user.nickname !== this.user.nickname) {
        this._flashMsg.successMsg(user.nickname + ' s\'est connecté');
      }
    });

    // TODO: Trouver un moyen pour set user to disconnect quand il n'est plus connecté
    // - Si appuie sur disconnect : OK
    // - Si ferme le navigateur brutalement: ??
    // On user Logged Out
    this.socket.on('remove-user', () => {
      // TODO: change delete pour update status user.connected quand Auth implementee
      // this.user.connected = false;
      // this.updateStatusUser(this.user._id, this.user);

      this.getUserLoggedIn();
      // this.listUser.splice(this.listUser.indexOf(this.user), 1);
    });

  }

}
