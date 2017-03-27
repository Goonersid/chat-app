
import { User } from './user';
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';


// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0

  lock = new Auth0Lock('k1KcHLpOsGRAH2UsGfHIiAOjd5W3eSOc', 'gchat.au.auth0.com', {});
  loggedInUser: Object;
  constructor() {
    this.loggedInUser = JSON.parse(localStorage.getItem('profile'));
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile)=> {
        if (error) {
          // Handle error
          return;
        }
        localStorage.setItem("accessToken", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));
        this.loggedInUser = profile;
      });
      localStorage.setItem('id_token', authResult.idToken);
    });
  }
  
  
  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }
  
  public getUserProfile(){
    return this.loggedInUser;
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem("accessToken");
  }
}