
import { myConfig } from './auth.config';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatUsersService {
  authToken : Object;
  private usersUrl = myConfig.fetchUsersUrl;
  constructor(private http: Http) { }
 getAllUsers(){
  return this.create()
        .then((token => {
          console.log(token);
          this.authToken = token;
          let headers = new Headers({'Content-Type': 'application/json'});
          headers.append("authentication","Bearer "+token['access_token'])
          this.http.get(myConfig.fetchUsersUrl,{headers : headers}).toPromise()
          .then(res => this.extractData)
          .catch(this.handleError);
        }));
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
