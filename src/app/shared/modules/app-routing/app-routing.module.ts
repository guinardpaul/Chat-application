import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { PickRoomComponent } from '@chatsComponents/pick-room/pick-room.component';
import { ChatRoomComponent } from '@chatsComponents/chat-room/chat-room.component';
import { RegisterComponent } from '@authComponents/register/register.component';
import { LoginComponent } from '@authComponents/login/login.component';

const appRoutes: Routes = [
  { path: 'pick-room', component: PickRoomComponent },
  { path: 'room', component: ChatRoomComponent },
  { path: 'room/:id', component: ChatRoomComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
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
