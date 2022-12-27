import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/candidat/register.service';
import { UsersService } from 'src/app/services/userServices/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup
   candidat;
   candidatlog;
 

  constructor(private fb:FormBuilder, private registerservice:RegisterService,
    private router: Router) { 
      
    }

  ngOnInit() {


    this.loginForm = this.fb.group({
      identifiant : "",
      pwd : ""
    })
  }

  onConnexion(){

   // console.log(this.loginForm)

      let user = {
         "identifiant": this.loginForm.value.identifiant,
         "password": this.loginForm.value.pwd
      }

      this.registerservice.connexion_candidat(user)
      .subscribe((response) => {
           let jwt=response.headers.get('Authorization');
           this.registerservice.saveToken(jwt);
           console.log(jwt)    
           this.router.navigate(['entreprise/list-offers']);
          // this.router.navigate(['/candidat/setcv']);
          
        },err=>{
      console.log(err)
    })
  }




  isAdmin(){
    return this.registerservice.isAdmin()
  }

  isCandidat(){
    return this.registerservice.isCandidat()
  }




}
