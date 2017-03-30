import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class AF {
  public messages: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  public chatEnable : string;
  subscriber:any;
  constructor(public af: AngularFire) {
    this.messages = this.af.database.list('messages');
    this.users = this.af.database.list('users');
  }
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   * @param {delegate token from auth0}
   */
  loginWithGoogle()  {
   return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    }).catch((error)=>{
        console.log(error);
    });
  }
  updateUserStatus(status){
    var usersSubsc = this.users.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        if (snapshot.email == this.email) {
          this.users.update(snapshot.$key,{
            status : status
          }).then(results => {
           if(status=="offline"){
              this.logout();
              localStorage.removeItem('id_token');
              localStorage.removeItem("accessToken");
          }
          
          })
        } 

      }, this);
     if(usersSubsc)usersSubsc.unsubscribe();
  });
    return this.users;
  }
  getUserKey(){
  }
  checkIfUserExists (email){
      return this.af.database.list('users',{
        query :{
          orderByChild: 'email',
          equalTo: email
        }
      });
  }
  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }
  /**
   *
   */
  addUserInfo() {
    this.subscriber = this.checkIfUserExists(this.email).subscribe(results => {
      if (results.length == 0) {
        this.users.push({
          email: this.email,
          displayName: this.displayName,
          status: "online"
        });
      }
      else {
        this.updateUserStatus("online");
      }
      //un subscribing after login as this is desired 
      this.subscriber.unsubscribe();
    })
    //We saved their auth info now save the rest to the db.
    
  
  console.log( "users",this.users);
  }

  /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */
  sendMessage(text,email) {
    var message = {
      message: text,
      displayName: this.displayName,
      email: this.email,
      to: email,
      timestamp: Date.now()
    };
    this.messages.push(message);
  }
}
