import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppMaterialModule } from './modules/app-material/app-material.module';

// Services
import { ChatService } from './services/chat/chat.service';

// Components
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { PickRoomComponent } from './components/pick-room/pick-room.component';
import { WidgetChatComponent } from './components/chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    PickRoomComponent,
    WidgetChatComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
