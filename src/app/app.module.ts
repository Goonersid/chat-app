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
import { AF } from './providers/af.service';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
      apiKey: "AIzaSyA5WkUYT4oJKfcKeuaZ3xAc9EigwBBR2Fc",
      authDomain: "gchat-project-6a119.firebaseapp.com",
      databaseURL: "https://gchat-project-6a119.firebaseio.com",
      storageBucket: "gchat-project-6a119.appspot.com",
      messagingSenderId: "171697051876"
};

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
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ], 
  providers: [Auth, appRoutingProviders, ChatUsersService,
  {
    provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
  },
  AF
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
