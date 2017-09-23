import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ChatComponent } from '../../components/chat/chat.component';
import { PickRoomComponent } from '../../components/pick-room/pick-room.component';
import { ChatRoomComponent } from '../../components/chat-room/chat-room.component';

const appRoutes: Routes = [
  { path: 'pick-room', component: PickRoomComponent },
  { path: 'chat', component: ChatRoomComponent },
  { path: '', redirectTo: 'pick-room', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
