import { ChatUsersService } from '../chat-users.service';
import { Component, OnInit, Input } from '@angular/core';

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
  
  
  selectedUser : any;
  processClasses(user) {
  // CSS classes: added/removed per current state of component properties
    return this.selectedUser && user.user_id==this.selectedUser.user_id?selectedUserClass:""
  }
  constructor(private chatService: ChatUsersService) { }
  
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
 