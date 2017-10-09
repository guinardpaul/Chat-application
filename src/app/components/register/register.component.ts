import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(private _fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this._fb.group({
      nickname: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
      confirmPassword: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  ngOnInit() {
  }

}
