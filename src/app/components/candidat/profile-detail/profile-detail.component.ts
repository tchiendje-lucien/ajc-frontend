import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/candidat/register.service';
import * as moment from 'moment';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

   detailcandidat;
   idcandidat

  constructor(private registerservice:RegisterService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {

    this.idcandidat=this.activatedroute.snapshot.paramMap.get("idcandidat");
    this.detailCandidat()
  }

    detailCandidat(){
 
      this.registerservice.detail_one_candidat(this.idcandidat)
      .subscribe(response => {
                 this.detailcandidat=response
                 console.log( this.detailcandidat)
              },err=>{
              console.log(err)
             })

    }

    ChaineVersArray(chaine: String){
       let ch = chaine.split('\n')
        return ch;
    }



   public CalculateAge(birthdate): number {
      return moment().diff(birthdate, 'years');
   } 

}
