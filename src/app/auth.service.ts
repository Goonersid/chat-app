
import { myConfig } from './auth.config';
import { AF } from './providers/af.service';
import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
// Avoid name not found warnings
declare var Auth0Lock: any;
declare var Auth0: any;

@Injectable()
export class Auth {
  // Configure Auth0

  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});
  auth0 = new Auth0({ domain: myConfig.domain, clientID: myConfig.clientID })
  isLoggedIn;
  loggedInUser: Object;
  constructor(public afService: AF) {
    this.loggedInUser = JSON.parse(localStorage.getItem('profile'));
    // Add callback for lock `authenticated` event
    var ctxt = this;
    this.afService.af.auth.subscribe(
              (auth) => {
                if(auth == null && !ctxt.authenticated()){
                  return;
                }
                else if (auth == null && this.authenticated()) {
                  console.log("Not Logged in.");

                  this.isLoggedIn = false;
                  this.afService.loginWithGoogle().then((data) => {
                    console.log("data 1",data);
                    this.afService.addUserInfo();
                  });
                }
                else {
                  console.log("Successfully Logged in.");
                  // Set the Display Name and Email so we can attribute messages to them
                  this.afService.displayName = auth.google.displayName||auth.auth.displayName;
                  this.afService.email = auth.google.displayName||auth.auth.email;
                  this.isLoggedIn = true;
                  this.afService.addUserInfo();
                }
              }
            );
    this.lock.on("authenticated", (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          // Handle error
          return;
        }
        if(!this.isLoggedIn){
          this.afService.loginWithGoogle().then((data) => {
                    
                    console.log("data2",data);
                    this.afService.addUserInfo();
                  });
        }
        localStorage.setItem("accessToken", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));
        localStorage.setItem('id_token', authResult.idToken);
        this.loggedInUser = profile;
        
        // Set the options to retreive a firebase delegation token
        var options = {
          company: this.loggedInUser['firebase_data']['company'],
          id_token: authResult.idToken,
          api: 'firebase',
          scope: "openid profile email"
        };
        // Make a call to the Auth0 '/delegate'
        this.auth0.getDelegationToken(options, (err, result) => {
          if (!err) {
            
            //we could do this or pass this token delegate to firebase.
            //https://github.com/angular/angularfire2/issues/286
            // Exchange the delegate token for a Firebase auth token

            
            
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

  public getUserProfile() {
    return this.loggedInUser;
  }
    
  public logout() {
    // Remove token from localStorage
    this.afService.updateUserStatus('offline');
  }
}