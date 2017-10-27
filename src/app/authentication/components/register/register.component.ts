import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// Services
import { UserService } from '@sharedServices/user/user.service';
import { AuthenticationService } from '@authServices/authentication.service';
import { ValidationService } from '@authServices/validation.service';
import { FlashMsgService } from '@sharedServices/flash-msg/flash-msg.service';
// Models
import { User } from '@sharedModels/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;
  processing: boolean;

  get nickname(): string { return this.registerForm.get('nickname').value as string; }
  get email(): string { return this.registerForm.get('email').value as string; }
  get passwords(): FormControl { return this.registerForm.get('passwords') as FormControl; }
  get password(): string { return this.passwords.get('password').value as string; }
  get confirmPassword(): string { return this.passwords.get('confirmPassword').value as string; }

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _authService: AuthenticationService,
    private _validationForm: ValidationService,
    private _flashMsg: FlashMsgService,
    private _router: Router
  ) {
    this.createForm();
    this.user = new User();
    this.processing = false;
  }

  onRegister() {
    this.processing = true;
    this.user = {
      nickname: this.nickname,
      password: this.password,
      email: this.email
    };
    this._authService.register(this.user)
      .subscribe(data => {
        console.log('Register user');
        console.log(data);
        this._flashMsg.successMsg('Compte enregistré');
        setTimeout(() => {
          this._router.navigate([ '/login' ]);
        }, 1000);
      }, err => {
        console.log(err);
        this.processing = false;
      }
      );
  }

  createForm() {
    this.registerForm = this._fb.group({
      nickname: [ '', Validators.compose([
        Validators.required
      ]) ],
      email: [ '', Validators.compose([
        Validators.required,
        this._validationForm.emailValidation
      ]) ],
      passwords: this._fb.group({
        password: [ '', Validators.compose([
          Validators.required
        ]) ],
        confirmPassword: [ '', Validators.compose([
          Validators.required
        ]) ]
      }, { validator: this._validationForm.passwordValidation }
      )
    });
  }

  getErrorMessage(arg: string) {
    switch (arg) {
      case 'nickname':
        return this.registerForm.controls[ 'nickname' ].hasError('required') ? 'Ce champ est requis' :
          '';
      case 'email':
        return this.registerForm.controls[ 'email' ].hasError('required') ? 'Ce champ est requis' :
          this.registerForm.controls[ 'email' ].hasError('emailValidation') ? 'Email invalide' :
            '';
      case 'password':
        return this.passwords.get('password').hasError('required') ? 'Ce champ est requis' :
          '';
      case 'confirmPassword':
        return this.passwords.get('confirmPassword').hasError('required') ? 'Ce champ est requis' :
          '';
      case 'passwords':
        return this.passwords.hasError('passwordValidation') ? 'Les password ne sont pas identiques' :
          '';
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
