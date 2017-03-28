import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
