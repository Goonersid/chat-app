
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
  loggedInUser: any = {
    given_name :''
  };
  constructor(public afService: AF) {
    this.loggedInUser = JSON.parse(localStorage.getItem('profile'));
    // Add callback for lock `authenticated` event
    // This needs to be implemented as Firebase does not recommend  a public database
    /*var ctxt = this;
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
                  this.afService.email = auth.google.email||auth.auth.email;
                  this.isLoggedIn = true;
                  this.afService.addUserInfo();
                }
              }
            );*/
    /**
     * Handle for browser refresh
     */
    if(this.authenticated()){
      this.setUpFirebaseParameters(this.getUserProfile());
    }
    /**
     * Handle for initial login..
     */
    this.lock.on("authenticated", (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if (error) {
          // Handle error
          return;
        }
        this.setUpFirebaseParameters(profile);
        localStorage.setItem("accessToken", authResult.accessToken);
        localStorage.setItem("profile", JSON.stringify(profile));
        localStorage.setItem('id_token', authResult.idToken);
        this.loggedInUser = profile;
        
        /*
         * AUth0 silent authentication hook.. Can be seen at the 
         * management console. Currently has an issue with angular
         * fire 2
         * https://github.com/angular/angularfire2/issues/286
         */
        // Set the options to retreive a firebase delegation token
       /* var options = {
          company: this.loggedInUser['firebase_data']['company'],
          id_token: authResult.idToken,
          api: 'firebase',
          scope: "openid profile email"
        };
        // Make a call to the Auth0 '/delegate'
        this.auth0.getDelegationToken(options, (err, result) => {
          if (!err) {
            
            //we could do this or pass this token delegate to firebase.
            
            // Exchange the delegate token for a Firebase auth token

            
            
          }
        });*/

      });
    });
  }
 /**
 * This requires FIrebase console rules to allow access without
 * authentication.e.g
 * {read : true,write : true }
 */
  private setUpFirebaseParameters(profile:any) :void {
        this.afService.displayName = profile.name;
        this.afService.email = profile.email;
        this.isLoggedIn = true;
        this.afService.addUserInfo();
  }
 /**
 * Initial login widget
 */
  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  }
  
 /**
 * returns the active auth0 token(if active) 
 */
  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }
 /**
 * For components/modules to access the user profile
 */
  public getUserProfile() {
    return this.loggedInUser;
  }
  /**
   * Logs out after updating the user status as offline
   */  
  public logout() {
    
    // Remove token from localStorage
    this.afService.updateUserStatus('offline');
    
  }
}