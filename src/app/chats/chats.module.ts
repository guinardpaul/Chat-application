import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules
import { AppMaterialModule } from '../modules/app-material/app-material.module';

// Services
import { ChatService } from './services/chat/chat.service';
import { RoomService } from './services/room/room.service';

// Components
import { PickRoomComponent } from './components/pick-room/pick-room.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    PickRoomComponent,
    ChatRoomComponent
  ],
  exports: [
    PickRoomComponent,
    ChatRoomComponent
  ],
  providers: [
    RoomService,
    ChatService
  ]
})
export class ChatsModule { }
