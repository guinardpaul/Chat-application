import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Angular Flash messages
import { FlashMessagesModule } from 'ngx-flash-messages';
// Modules
import { AppRoutingModule } from './shared/modules/app-routing/app-routing.module';
import { AppMaterialModule } from './shared/modules/app-material/app-material.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './authentication/auth.module';
import { ChatsModule } from './chats/chats.module';
// Services
import { FlashMsgService } from './shared/services/flash-msg/flash-msg.service';
import { UserService } from './shared/services/user/user.service';
import { ValidationService } from './authentication/services/validation.service';
import { AuthenticationService } from './authentication/services/authentication.service';
import { ChatService } from './chats/services/chat/chat.service';
import { RoomService } from './chats/services/room/room.service';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    SharedModule,
    AuthModule,
    ChatsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule
  ],
  providers: [
    FlashMsgService,
    UserService,
    ValidationService,
    AuthenticationService,
    ChatService,
    RoomService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
