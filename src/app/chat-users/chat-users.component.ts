import { ChatUsersService } from '../chat-users.service';
import { AF } from '../providers/af.service';
import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { forEachChild } from 'typescript';

const selectedUserClass : string = "bg-info text-white";

@Component({
  selector: 'chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['./chat-users.component.css']
})


export class ChatUsersComponent implements OnInit {
  @Input() currentUser: any;
  allUsers : any;
  token : any;
  canDisplayBadge : Boolean = false;
  public newMessage: string;
  public unreadMessages : any = { }
  public users: FirebaseListObservable<any>;
  public messages : FirebaseListObservable<any>;
  public chatbox : any;
  
  selectedUser : any;
  processClasses(user) {
  // CSS classes: added/removed per current state of component properties
    return this.selectedUser && user.email==this.selectedUser.email?selectedUserClass:""
  }
  constructor(public afService: AF,public chatService: ChatUsersService) {
      this.users = this.afService.users;
      this.messages = this.afService.messages;
   }
  ngOnInit() {
    console.log("current user",this.currentUser);
    this.getAllUsers();
    var ctxt = this;
    this.messages.subscribe(messages => {
      if(ctxt.canDisplayBadge){
        let newMessage = messages[messages.length - 1];//The newly received message
        if ((ctxt.selectedUser && ctxt.selectedUser.email !== newMessage.email && newMessage.to ==this.afService.email) || (!ctxt.selectedUser 
        && newMessage.to ==this.afService.email)
        ) {
          ctxt.unreadMessages[newMessage.email] = ctxt.unreadMessages[newMessage.email] ? ctxt.unreadMessages[newMessage.email] + 1 : 1;
        }
        else if (ctxt.selectedUser && ctxt.selectedUser.email == newMessage.to) {
          ctxt.unreadMessages[newMessage.email] = 0;
        }
      }
      else{
        ctxt.canDisplayBadge =true;
      } 
    });
  }
  getAllUsers() {
    this.chatService.getAllUsers()
  }
  onSelect(user){
    this.selectedUser = user;
    this.unreadMessages[user.email]="";
  }
  processNewMessages(messages:any){
    
    for (let message of messages) {
     if(this.selectedUser.email !== message.to){
      
        this.unreadMessages[message.to] = this.unreadMessages[message.to]+1;
      }
      else{
        this.unreadMessages[message.to] = 0;
      }
    }

  }
  getUnreadMessages(userEmail){
    
    return this.unreadMessages[userEmail];
  }
  
}
 