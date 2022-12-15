import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/userServices/users.service';
import { RegisterService } from './services/candidat/register.service';
import { NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ajc-fontend';
  //currentRoute: string;
  candidatconnecter: String;

  constructor(public usersService:UsersService, private registerservice:RegisterService, private router:Router){
       // deconnecter pour obtenir la route corante
      // router.events.pipe(
      //     filter(event => event instanceof NavigationEnd)
      //  ) .subscribe(event => {
      //   //console.log(event.url);
      //   this.currentRoute = event.url;
      //  });
     
  }

   ngOnInit(): void {
        this.registerservice.loadToken(); 
       // console.log(this.router.url) 

   }

   isAdmin(){
    return this.registerservice.isAdmin()
  }

  isCandidat(){
    return this.registerservice.isCandidat()
  }

  isAuthenticated(){
    return this.registerservice.isAuthenticated()
  }

  toDeconnected(){         
        this.registerservice.toDeconnected()
       // window.location.reload();             
  }

  candadatConnected(){
    this.candidatconnecter = this.registerservice.candidatConnected()
  }


}
