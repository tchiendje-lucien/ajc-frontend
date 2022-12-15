// import { Component, OnInit } from '@angular/core';
// import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RegisterService } from 'src/app/services/candidat/register.service';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   registerform: FormGroup
//   candidat;
//   messageconfirmpassword
  
//   constructor( private fb:FormBuilder, private candidatservice: RegisterService,
//     private router: Router,private route:ActivatedRoute, private registerserve: RegisterService) { }

//   ngOnInit() {
//        this.registerform = this.fb.group({
//            oid : '',
//            nom : ["", Validators.required],
//            prenom : ["", Validators.required],
//            email : ["", Validators.required],
//            password : ["", Validators.required],
//            password1 : ["", Validators.required],
//            civilite : ["", Validators.required]
//        })

  

//   }


//   onRegisterCandidat(){
    
//     // this.router.navigate(['/candidat/setcv']);
//     let registered = this.registerform.value
//     if(registered.password!=registered.password1){

//       this.messageconfirmpassword = "Les mots de passe sont diferent "

//     }else{
//           this.messageconfirmpassword =""

//                 this.candidatservice.add_candidat(this.registerform.value)
//           .subscribe((response) => {
//               alert("Succès enregitrement")
//               this.registerserve.candidatserv = response
//               //this.router.navigate(['/candidat/setcv']);
//               this.router.navigate(['/candidat/login']);
//               //console.log(response)
       
//           },err=>{
//             this.messageconfirmpassword = err
//           console.log(err)
//         }) 

//     }

//   }

//   onVerifInitPasse(){
//      this.messageconfirmpassword =""
//   }


//   goToConnexion() {
    
//   this.router.navigate(['/users'],
//     {
//       queryParams: { filter: 'new' },
//       queryParamsHandling: 'merge' }
//     );
// }

// }
