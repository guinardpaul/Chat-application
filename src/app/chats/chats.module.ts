import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { AppMaterialModule } from '../shared/modules/app-material/app-material.module';
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
  ]
})
export class ChatsModule { }
