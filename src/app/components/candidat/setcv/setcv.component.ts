import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/candidat/register.service';

@Component({
  selector: 'app-setcv',
  templateUrl: './setcv.component.html',
  styleUrls: ['./setcv.component.css']
})
export class SetcvComponent implements OnInit {

  candidat
  identiteForm: FormGroup

  constructor(private fb:FormBuilder, private registerservice: RegisterService) { }

  ngOnInit() {
    this.candidat = this.registerservice.candidatserv
    console.log(this.candidat)
    this.identiteForm= this.fb.group({
        oid : this.candidat.oid,
        civilite : this.candidat.civilite,
        nom : this.candidat.nom,
        prenom : this.candidat.prenom,
        email : this.candidat.email,
        datenaissance : this.candidat.datenaissance,
        lieunaissance : this.candidat.lieunaissance,
        pays : this.candidat.pays,
        ville : this.candidat.ville,
        telephone1 : this.candidat.telephone1,
        telephone2 : this.candidat.telephone2
    })

        
  }


   onRegisterIdentite(){
      
      this.registerservice.add_candidat(this.identiteForm.value)
      .subscribe((response) => {
          alert("Succès enregitrement")
      },err=>{
      console.log(err)
    }) 

    }


}
