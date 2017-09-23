import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppMaterialModule } from './modules/app-material/app-material.module';

// Services
import { ChatService } from './services/chat/chat.service';
import { UserService } from './services/user/user.service';

// Components
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { PickRoomComponent } from './components/pick-room/pick-room.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PickRoomComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ChatService,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
