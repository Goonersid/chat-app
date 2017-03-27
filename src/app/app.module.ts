import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Auth } from './auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  routing,
  appRoutingProviders
} from './app.routes';
import { ChatUsersService } from './chat-users.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ChatUsersComponent } from './chat-users/chat-users.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ChatUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [Auth, appRoutingProviders, ChatUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
