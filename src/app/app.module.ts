import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Angular Flash messages
import { FlashMessagesModule } from 'ngx-flash-messages';

// Modules
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppMaterialModule } from './modules/app-material/app-material.module';

// Services
import { ChatService } from './services/chat/chat.service';
import { UserService } from './services/user/user.service';
import { RoomService } from './services/room/room.service';
import { FlashMsgService } from './services/flash-messages/flash-messages.service';

// Components
import { AppComponent } from './app.component';
import { PickRoomComponent } from './chats/pick-room/pick-room.component';
import { ChatRoomComponent } from './chats/chat-room/chat-room.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PickRoomComponent,
    ChatRoomComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule
  ],
  providers: [
    ChatService,
    UserService,
    RoomService,
    FlashMsgService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
