import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Services
import { FlashMsgService } from './services/flash-messages/flash-messages.service';
import { UserService } from './services/user/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    FlashMsgService
  ]
})
export class SharedModule { }
