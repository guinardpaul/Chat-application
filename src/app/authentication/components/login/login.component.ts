import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

// Services
import { UserService } from '@sharedServices/user/user.service';
import { AuthenticationService } from '@authServices/authentication.service';

// Models
import { User } from '@sharedModels/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  // Change for test on several device or PROD
  socket = io('http://localhost:3000/');
  // socket = io('http://192.168.0.15:3000/');
  loginForm: FormGroup;
  user: User;
  processing: boolean;

  get nickname(): string {
    return this.loginForm.get('nickname').value as string;
  }

  get password(): string {
    return this.loginForm.get('password').value as string;
  }

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _authService: AuthenticationService,
    private _router: Router
  ) {
    this.createForm();
    this.user = new User();
    this.processing = false;
  }

  onLogin() {
    this.processing = true;
    this.user = {
      nickname: this.nickname,
      password: this.password
    };

    this._authService.login(this.user)
      .subscribe(data => {
        console.log('Login data');
        console.log(data);

        if (data.success) {
          const now = new Date();
          const user: User = data.obj;
          user.updated_at = now;
          user.connected = true;

          this._userService.updateUser(data.obj._id, user)
            .subscribe(updateUser => {
              console.log('update user status');
              console.log(updateUser);
              this._authService.storeUserData(data.token, updateUser.obj);

              setTimeout(() => {
                this.socket.emit('login', updateUser.obj);
                console.log(data.message);
                this._router.navigate([ 'pick-room' ]);
              }, 1000);
            }, err => {
              console.log(err);
              this.processing = false;
            }
            );
        } else {
          console.log(data.message);
          this.processing = false;
        }
      }, err => {
        console.log(err);
        this.processing = false;
      }
      );
  }

  createForm() {
    this.loginForm = this._fb.group({
      nickname: [ '', Validators.compose([
        Validators.required
      ]) ],
      password: [ '', Validators.compose([
        Validators.required
      ]) ]
    });
  }

  getErrorMessage(arg: string) {
    switch (arg) {
      case 'nickname':
        return this.loginForm.controls[ 'nickname' ].hasError('required') ? 'You must enter a value' :
          '';
      case 'password':
        return this.loginForm.controls[ 'password' ].hasError('required') ? 'You must enter a value' :
          '';
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
