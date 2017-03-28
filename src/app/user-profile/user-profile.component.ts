import { Auth } from '../auth.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor() { }
    @Input() user: any;

}
