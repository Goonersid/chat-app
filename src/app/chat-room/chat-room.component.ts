import { Auth } from '../auth.service';
import { AF } from '../providers/af.service';
import { Component, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent {
  @Input() user:any;
  public newMessage: string;
  public messages: FirebaseListObservable<any>;
  public chatbox : any;
  constructor(public afService: AF) {
    this.messages = this.afService.messages;
    
  }
  
  sendMessage(){
    this.afService.sendMessage(this.user.chatmessage,this.user.email);
    this.user.chatmessage = '';
  }

  isYou(email) {
    if(email == this.afService.email)
      return true;
    else
      return false;
  }
  isMe(email) {
    if(email == this.afService.email)
      return false;
    else
      return true;
  }


}
