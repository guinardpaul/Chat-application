import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PickRoomComponent } from '../../chats/pick-room/pick-room.component';
import { ChatRoomComponent } from '../../chats/chat-room/chat-room.component';
import { RegisterComponent } from '../../authentication/register/register.component';
import { LoginComponent } from '../../authentication/login/login.component';

const appRoutes: Routes = [
  { path: 'pick-room', component: PickRoomComponent },
  { path: 'room', component: ChatRoomComponent },
  { path: 'room/:id', component: ChatRoomComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
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
