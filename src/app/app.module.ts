import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Angular Flash messages
import { FlashMessagesModule } from 'ngx-flash-messages';

// Modules
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './authentication/auth.module';
import { ChatsModule } from './chats/chats.module';

// Services
import { FlashMsgService } from './shared/services/flash-messages/flash-messages.service';

// Components
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    SharedModule,
    AuthModule,
    ChatsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
