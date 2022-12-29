import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/candidat/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 userconnecter

  constructor(private registerservice: RegisterService) { }

  ngOnInit() {
  }

  
  isAuthenticated() {
    this.userconnecter = this.registerservice.candidat;
    return this.registerservice.isAuthenticated();
  }

  isCandidat() {
    return this.registerservice.isCandidat();
  }

  

}
