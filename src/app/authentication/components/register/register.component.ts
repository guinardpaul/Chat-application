import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { UserService } from '@sharedServices/User/user.service';
import { AuthenticationService } from '@authServices/authentication.service';

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

  get nickname(): string {
    return this.registerForm.get('nickname').value as string;
  }

  get email(): string {
    return this.registerForm.get('email').value as string;
  }

  get passwords(): FormGroup {
    return this.registerForm.get('passwords') as FormGroup;
  }

  get password(): string {
    return this.passwords.get('password').value as string;
  }

  get confirmPassword(): string {
    return this.passwords.get('confirmPassword').value as string;
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

        setTimeout(() => {
          this._router.navigate([ '/login' ]);
        }, 1000);
      }, err => {
        console.log(err);
        this.processing = true;
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
        this.emailValidation
      ]) ],
      passwords: this._fb.group({
        password: [ '', Validators.compose([
          Validators.required
        ]) ],
        confirmPassword: [ '', Validators.compose([
          Validators.required
        ]) ]
      }, Validators.compose([
        this.passwordValidation
      ]))
    });
  }

  // VALIDATORS
  emailValidation(controls) {
    const EMAIL_REGEXP =
      new RegExp([ '^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
        '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
        '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
        '[a-zA-Z]{2,}))$' ].join(''));
    if (EMAIL_REGEXP.test(controls.value)) {
      return null;
    }
    return {
      emailValidation: true
    };
  }

  passwordValidation(controls) {
    const password = this.password;
    const confirmPassword = this.confirmPassword;
    if (password === confirmPassword) {
      return null;
    }
    return {
      passwordValidation: true
    };
  }

  getErrorMessage(arg: string) {
    switch (arg) {
      case 'nickname':
        return this.registerForm.controls[ 'nickname' ].hasError('required') ? 'Vous devez entrez une valeur' :
          '';
      case 'email':
        return this.registerForm.controls[ 'email' ].hasError('required') ? 'Vous devez entrez une valeur' :
          this.registerForm.controls[ 'email' ].hasError('emailValidation') ? 'Email invalide' :
            '';
      case 'password':
        return this.passwords.controls[ 'password' ].hasError('required') ? 'Vous devez entrez une valeur' :
          '';
      case 'confirmPassword':
        return this.passwords.controls[ 'confirmPassword' ].hasError('required') ? 'Vous devez entrez une valeur' :
          this.passwords.hasError('passwordValidation') ? 'Les password ne sont pas identiques' :
            '';
      default:
        break;
    }
  }

  ngOnInit() {
  }

}
