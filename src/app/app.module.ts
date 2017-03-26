import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Auth } from './auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routing,
         appRoutingProviders } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	routing,
  NgbModule.forRoot()
  ],
  providers: [Auth,appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
