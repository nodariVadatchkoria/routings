import { Component } from '@angular/core';
import {AuthorizationService} from "./services/authorization.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routingi';

 constructor(
   public AuthorizationService: AuthorizationService
 ) {

 }
  login() {
  this.AuthorizationService.login();
  }
  logout() {
    this.AuthorizationService.logout();
  }
}
