import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

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
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { ChatRoomComponent } from './chat-room/chat-room.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ChatUsersComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ], 
  providers: [Auth, appRoutingProviders, ChatUsersService,
  {
    provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
