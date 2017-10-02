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
   * On login : used when user enter a nickname
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
   * On Login :
   * - save User to database
   * - emit login to server
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

  /**
   * NOT USED
   * 
   * @param {number} id user id
   * @param {User} user user body
   * @memberof PickRoomComponent
   */
  updateStatusUser(id: number, user: User) {
    this.user.connected = false;
    this._userService.updateStatus(id, user)
      .subscribe(data => {
        // TODO: add flash messages logout/login
      }, err => console.log(err)
      );
  }

  /**
   * NOT USED
   * 
   * @param {number} id user id
   * @memberof PickRoomComponent
   */
  deleteUser(id: number) {
    this._userService.deleteUser(id)
      .subscribe(data => {
        console.log(data.message);
        // TODO: add flash messages logout/login
      }, err => console.log(err)
      );
  }

  /**
   * On Join Room :
   * - Check si roomCommune pour les users existe
   * - crée room si n'existe pas
   * - redirect vers room
   * - emit connection user au server
   * 
   * @memberof PickRoomComponent
   */
  joinRoom() {
    // Check si room between the two users exists
    // Get User B information
    let userB = new User();
    userB = this.selectedUsers[ 0 ];
    this.getRoomCommuneTwoUsers(this.user._id, userB._id);

    setTimeout(() => {
      // Si roomCommune existe
      if (this.roomCommune.success) {
        setTimeout(() => {
          this._router.navigate([ '/room', this.roomCommune.obj._id ]);
        }, 1000);
      } else {
        // Si roomCommune n'existe pas
        // create roomName based on users nickname
        this.selectedUsers.push(this.user);
        let roomName = '';
        for (const user in this.selectedUsers) {
          if (this.selectedUsers.hasOwnProperty(user)) {
            roomName += this.selectedUsers[ user ].nickname;
          }
        }
        // Set room body
        const room = {
          name: roomName,
          users: this.selectedUsers
        };

        // save Room
        this.saveRoom(room);
      }

      // Emit connexion to room message
      const now = new Date();
      const joinMsg = {
        nickname: this.user.nickname,
        message: this.user.nickname + ' s\'est connecté',
        updated_at: now
      };

      this.socket.emit('send-message', joinMsg);
    }, 2000);

  }

  /**
   * Save Room
   * utilisé si room entre plusieurs users n'existe pas
   *
   * @param {Room} room room body
   * @memberof PickRoomComponent
   */
  saveRoom(room: Room) {
    this._roomService.createRoom(room)
      .subscribe(data => {
        console.log(data);
        localStorage.setItem('room', JSON.stringify(data.obj._id));
      });

    // redirect to room created
    setTimeout(() => {
      this._router.navigate([ '/room', JSON.parse(localStorage.getItem('room')) ]);
    }, 1000);
  }

  /**
   * Get Room commune à 2 users
   * Set this.roomCommune
   *
   * @param {number} idA userA id
   * @param {number} idB userB id
   * @memberof PickRoomComponent
   */
  getRoomCommuneTwoUsers(idA: number, idB: number) {
    this._roomService.getRoomCommune(idA, idB)
      .subscribe(data => {
        console.log(data);
        this.roomCommune = data;
      }, err => console.log(err)
      );
  }

  /**
   * NOT USED
   *
   * @param {number} id user id
   * @returns {User} user
   * @memberof PickRoomComponent
   */
  getOneUser(id: number): User {
    let userB = new User();
    this._userService.getOneUserById(id)
      .subscribe(data => {
        console.log(data);
        userB = data.obj;
      }, err => console.log(err)
      );
    return userB;
  }

  /**
   * Get User logged In (attribut connected === true)
   *
   * @returns {User[]} list Users
   * @memberof PickRoomComponent
   */
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

  /**
   * Set this.selectedUsers en fonction des users selectionnés
   *
   * @param {User} user user body
   * @memberof PickRoomComponent
   */
  onUsersSelected(user: User) {
    if (this.selectedUsers.indexOf(user) !== -1) {
      this.selectedUsers.splice(this.selectedUsers.indexOf(user), 1);
    } else {
      this.selectedUsers.push(user);
    }
  }

  ngOnInit() {
    // Si sessionStorage contient user, affiche select User list
    if (sessionStorage.length > 0) {
      this.userLoggedIn = true;
      this.user = JSON.parse(sessionStorage.getItem('user'));
      this.getUserLoggedIn();
    }

    // On user Logged In
    this.socket.on('add-user', user => {
      this.getUserLoggedIn();
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
