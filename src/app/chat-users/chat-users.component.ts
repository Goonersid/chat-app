import { ChatUsersService } from '../chat-users.service';
import { AF } from '../providers/af.service';
import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

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
  public newMessage: string;
  public users: FirebaseListObservable<any>;
  public chatbox : any;
  
  selectedUser : any;
  processClasses(user) {
  // CSS classes: added/removed per current state of component properties
    return this.selectedUser && user.email==this.selectedUser.email?selectedUserClass:""
  }
  constructor(public afService: AF,public chatService: ChatUsersService) {
      this.users = this.afService.users;
   }
    
  ngOnInit() {
    console.log("current user",this.currentUser);
    this.getAllUsers();
  }
  getAllUsers() {
    this.chatService.getAllUsers()
  }
  onSelect(user){
    this.selectedUser = user;
  }
  
}
 