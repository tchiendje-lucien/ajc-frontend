import { Component, OnInit } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/candidat/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform: FormGroup
  canditat;
  
  constructor( private fb:FormBuilder, private candidatservice: RegisterService,
    private router: Router,private route:ActivatedRoute, private registerserve: RegisterService) { }

  ngOnInit() {
       this.registerform = this.fb.group({
           nom : ["", Validators.required],
           prenom : "",
           email : "",
           password : "",
           civilite : ""
       })

  }


  onRegisterCandidat(){
    
    // this.router.navigate(['/candidat/setcv']);

      this.candidatservice.add_candidat(this.registerform.value)
      .subscribe((response) => {
          alert("Succès enregitrement")
           this.registerserve.candidatserv = response
           this.router.navigate(['/candidat/setcv']);
         //  this.router.navigate(['/candidat/login']);
          //console.log(response)

      },err=>{
      console.log(err)
    }) 
  }

  goToConnexion() {
    
  this.router.navigate(['/users'],
    {
      queryParams: { filter: 'new' },
      queryParamsHandling: 'merge' }
    );
}

}
