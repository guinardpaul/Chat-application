import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdInputModule,
  MdButtonModule,
  MdListModule,
  MdCardModule,
  MdChipsModule
} from '@angular/material';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdCardModule,
    MdChipsModule
  ],
  exports: [
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdListModule,
    MdCardModule,
    MdChipsModule
  ]
})
export class AppMaterialModule { }
