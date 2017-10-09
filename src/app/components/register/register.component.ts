import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user = new User();

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService
  ) {
    this.createForm();
  }

  onRegister() {
    this.user = {
      nickname: this.nickname,
      password: this.password,
      email: this.email
    };

    this._userService.saveUser(this.user)
      .subscribe(data => {
        console.log(data);
      }, err => console.log(err)
      );
  }

  createForm() {
    this.registerForm = this._fb.group({
      nickname: [ '', Validators.compose([
        Validators.required
      ]) ],
      email: [ '', Validators.compose([
        Validators.required
      ]) ],
      password: [ '', Validators.compose([
        Validators.required
      ]) ],
      confirmPassword: [ '', Validators.compose([
        Validators.required
      ]) ]
    });
  }

  get nickname(): string {
    return this.registerForm.get('nickname').value as string;
  }

  get email(): string {
    return this.registerForm.get('email').value as string;
  }

  get password(): string {
    return this.registerForm.get('password').value as string;
  }

  get confirmPassword(): string {
    return this.registerForm.get('confirmPassword').value as string;
  }

  getErrorMessage(arg: string) {
    switch (arg) {
      case 'nickname':
        return this.registerForm.controls[ 'nickname' ].hasError('required') ? 'You must enter a value' :
          '';
      case 'email':
        return this.registerForm.controls[ 'email' ].hasError('required') ? 'You must enter a value' :
          this.registerForm.controls[ 'email' ].hasError('email') ? 'Not a valid email' :
            '';
      case 'password':
        return this.registerForm.controls[ 'password' ].hasError('required') ? 'You must enter a value' :
          '';
      case 'confirmPassword':
        return this.registerForm.controls[ 'confirmPassword' ].hasError('required') ? 'You must enter a value' :
          '';
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
