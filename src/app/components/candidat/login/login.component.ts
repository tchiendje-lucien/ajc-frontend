import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/candidat/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup

  constructor(private fb:FormBuilder, private registerservice:RegisterService) { }

  ngOnInit() {
     

    this.loginForm = this.fb.group({
      user : "",
      pwd : ""
    })


    //  const email = this.router.snapshot.paramMap.get('email');
     // console.log(email)
  }

  onConnexion(){
      
    console.log(this.loginForm)
      
      let user = {        
         "email": this.loginForm.value.user ,
         "password": this.loginForm.value.pwd
      }

      this.registerservice.connexion_candidat(user)
      .subscribe((response) => {
          console.log(response.headers.get('Authorization'))
           let jwt=response.headers.get('Authorization');
           this.registerservice.saveToken(jwt);
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
