import { ChatUsersService } from '../chat-users.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['./chat-users.component.css']
})
export class ChatUsersComponent implements OnInit {
  @Input() currentUser: Object;
  allUsers : any;
  token : any;
  constructor(private chatService: ChatUsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers() {
    this.chatService.getAllUsers()
        .then((allUsers => {
          console.log(allUsers)
          this.allUsers = allUsers}));
  }

}
 