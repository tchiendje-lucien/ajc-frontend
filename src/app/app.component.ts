import { Component } from '@angular/core';
import { RegisterService } from './services/candidat/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ajc-fontend';

   constructor(private registerservice:RegisterService){}
   
   isAdmin(){
    return this.registerservice.isAdmin()
  }

  isCandidat(){
    return this.registerservice.isCandidat()
  }

  isAuthenticated(){
    return this.registerservice.isAuthenticated()
  }

}
