
import { myConfig } from './auth.config';
import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import * as firebase from "firebase";


// Avoid name not found warnings
declare var Auth0Lock: any;
declare var Auth0: any;
@Injectable()
export class Auth {
  // Configure Auth0

  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});
  auth0 = new Auth0({ domain : myConfig.domain, clientID: myConfig.clientID})
  
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
        localStorage.setItem('id_token', authResult.idToken);
        this.loggedInUser = profile;
        
        // Set the options to retreive a firebase delegation token
        var options = {
          id_token : authResult.idToken,
          api : 'firebase',
          "scope": "openid profile"
        };
        
        // Make a call to the Auth0 '/delegate'
        this.auth0.getDelegationToken(options, function(err, result) {
          if(!err) {
            // Exchange the delegate token for a Firebase auth token
            firebase.auth().signInWithCustomToken(result.id_token).catch(function(error) {
              if(!error){
                // Retrieve Firebase Messaging object.
                const messaging = firebase.messaging();
                console.log(messaging);
              }
              else
              console.log(error);
              
            });
          }
        });
        
        
      });
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