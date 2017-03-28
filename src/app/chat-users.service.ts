
import { myConfig } from './auth.config';
import { Auth } from './auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatUsersService {
  authToken : Object;
  allUsers : any;
  private usersUrl = myConfig.fetchUsersUrl;
  constructor(private auth:Auth,private http: Http, private authHttp: AuthHttp) { }
 getAllUsers(){
  return this.create()
        .then((token => {
          console.log(token);
          localStorage.setItem('id_token',token.access_token)
          this.authToken = token;
          this.requestUsers(token);
        }));
 }
  requestUsers(token){
    return this.authHttp.get(this.usersUrl)
      .map(res => res.json())
      .subscribe(
        data => this.allUsers= data,
        error => this.allUsers = error._body || error
      );
    
    
  }

  create() {
    let headers = new Headers({'Content-Type': 'application/json'});
    return this.http
      .post(myConfig.oauthUrl, 
        '{"client_id":"vPaSA7LL0a932iSo5DMQn3B4kNJQKr1J","client_secret":"TUZyy3x0W80OlanWRdRMJWAJo4DmG1YB7RYoaDxynZx3GLDbcgqRzK_83cDdatKP","audience":"https://gchat.au.auth0.com/api/v2/","grant_type":"client_credentials"}'
        , {headers : headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
