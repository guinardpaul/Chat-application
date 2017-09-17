import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ChatComponent } from '../../components/chat/chat.component';
import { PickRoomComponent } from '../../components/pick-room/pick-room.component';
import { WidgetChatComponent } from '../../components/widget-chat/widget-chat.component';

const appRoutes: Routes = [
  { path: 'pick-room', component: PickRoomComponent },
  { path: 'chat', component: WidgetChatComponent },
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
