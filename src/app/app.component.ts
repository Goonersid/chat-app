import { Component, OnInit } from '@angular/core';
import { Auth } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string;
  constructor(public auth: Auth) {
   }
  ngOnInit(): void {
    this.title = 'G-Chat Dashboard!';
  }
}
