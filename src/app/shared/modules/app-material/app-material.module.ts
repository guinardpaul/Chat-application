import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule
  ]
})
export class AppMaterialModule { }
