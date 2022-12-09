import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/candidat/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup
   candidat;
  constructor(private fb:FormBuilder, private registerservice:RegisterService,
    private router: Router) { }

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
         "email": this.loginForm.value.user,
         "password": this.loginForm.value.pwd
      }

      this.registerservice.connexion_candidat(user)
      .subscribe((response) => {
          //console.log(response)
          //console.log(response.headers.get('Authorization'))
           let jwt=response.headers.get('Authorization');
           this.registerservice.saveToken(jwt);
           console.log(jwt)

         //  this.candidatconnect();
           //this.router.navigate(['/candidat/setcv']);

        },err=>{
      console.log(err)
    })
  }



    candidatconnect(){
         let user = {
         "identifiant": this.loginForm.value.user,
         "password": this.loginForm.value.pwd
      }

         this.registerservice.load_candidat(user)
         .subscribe(data=>{
            this.candidat=data
            console.log(this.candidat)
            this.router.navigate(['/candidat/setcv']);
                      //this.registerservice.candidatserv=this.candidat
          }),err=>{ console.log(err)}
  }




  isAdmin(){
    return this.registerservice.isAdmin()
  }

  isCandidat(){
    return this.registerservice.isCandidat()
  }




}
