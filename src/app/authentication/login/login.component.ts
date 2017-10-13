import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user = new User();

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService
  ) {
    this.createForm();
  }

  onLogin() {
    this.user = {
      nickname: this.nickname,
      password: this.password
    };

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

  get nickname(): string {
    return this.loginForm.get('nickname').value as string;
  }

  get password(): string {
    return this.loginForm.get('password').value as string;
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
