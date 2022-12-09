import { Component } from '@angular/core';
import { UsersService } from './services/userServices/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ajc-fontend';

  constructor(public usersService:UsersService){}
}
