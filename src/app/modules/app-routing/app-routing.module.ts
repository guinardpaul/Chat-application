import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ChatComponent } from '../../components/chat/chat.component';
import { PickRoomComponent } from '../../components/pick-room/pick-room.component';

const appRoutes: Routes = [
  { path: 'pick-room', component: PickRoomComponent },
  { path: 'chat', component: ChatComponent },
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
