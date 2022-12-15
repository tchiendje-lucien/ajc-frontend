import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/services/candidat/register.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-setcv',
  templateUrl: './setcv.component.html',
  styleUrls: ['./setcv.component.css']
})
export class SetcvComponent implements OnInit {

  candidat;competence;scolarite;experiencepro;langue;loisir
  listePays;
  identiteForm: FormGroup
  competenceForm: FormGroup
  scolariteForm: FormGroup
  experienceForm: FormGroup
  langueForm: FormGroup
  loisirForm: FormGroup
  cssvalidator
 
  listlangue=['Français', 'Anglais', 'Chinoi', 'Espagnol', 'Allemand', 'Arable']
  listniveaulangue=['Scolaire','Intermedaire','Soutenu']
  listniveau =['Primaire','Secondaire','DUT ou Equivalent','Licence ou Equivalent','Master1 ou Equivalent','Master2 ou Equivalent','Doctorat']
  listdomaineformation =['Scientifique','Technologique','Indutriel','Comptabilite et finance','Management','Commercial','Environement','Gestion','Communication','Litterature']

  langueArray=[]; 

  constructor(private fb:FormBuilder, private registerservice: RegisterService,
    private router: Router) { }

  ngOnInit() {


    this.candidatconnect()
    

    //this.candidat = this.registerservice.candidatserv
    console.log(this.candidat)
    this.identiteForm= this.fb.group({
        oid : "",
        civilite :"",
        nom :["", Validators.required],
        prenom :["", Validators.required],
        email :["",Validators.required],
        datenaissance :["", Validators.required],
        lieumaissance :["", Validators.required],
        pays :["", Validators.required],
        ville :["", Validators.required],
        telephone1 :["", Validators.required],
        telephone2 :[""]
    })
     this.listPays()

    this.competenceForm = this.fb.group({
      oid : "",
      domaine: ["",Validators.required],
	    detail: ["",Validators.required]
    })

      this.scolariteForm = this.fb.group({
         oid : '',
	       datedebut : ['',Validators.required],
	       datefin : ['',Validators.required],
	       domaine : ['',Validators.required],
         specialite : ['',Validators.required],
	       niveau : ['',Validators.required],
	       pays : ['',Validators.required],
         ville : ['',Validators.required]
    })

    this.experienceForm = this.fb.group({
          oid : [''],
          datedebut : ['',Validators.required],
          datefin : ['',Validators.required],
          duree : ['',Validators.required],
          entreprise : ['',Validators.required],
          poste : ['',Validators.required],
          tache : ['',Validators.required],
          pays : ['',Validators.required],
          ville : ['',Validators.required]
    })

     this.loisirForm = this.fb.group({
      oid : "",
      loisir: ["",Validators.required]
    })
            
  }


   onEditIdentiteCandidat(){
      
      console.log(this.identiteForm.value)

      this.registerservice.edit_candidat(this.identiteForm.value)
      .subscribe((response) => {
          alert("Succès modification")
      },err=>{
      console.log(err)
    }) 

    }




    candidatconnect(){


      console.log()

         this.registerservice.load_candidat()
         .subscribe(data=>{

            this.candidat=data
            this.registerservice.userconnectservice=this.candidat
            this.competence=this.candidat.competence
            this.scolarite=this.candidat.scolarite
            this.experiencepro=this.candidat.experience
            this.langue=this.candidat.langue
            this.loisir=this.candidat.loisir
            console.log(this.langue)
            
                this.identiteForm.patchValue({
                oid : this.candidat.oid,
                civilite :this.candidat.civilite,
                nom :this.candidat.nom,
                prenom :this.candidat.prenom,
                email :this.candidat.email,
                datenaissance :this.candidat.datenaissance,
                lieumaissance :this.candidat.lieumaissance,
                pays :this.candidat.pays,
                ville :this.candidat.ville,
                telephone1 :this.candidat.telephone1,
                telephone2 :this.candidat.telephone2
            })

           // Loisir     

               this.loisirForm.patchValue({
                oid : this.loisir[0].oid,
                loisir :this.loisir[0].loisir,
            })

          /// Langue

           let langue =this.langue
           for (var i = 0; i < langue.length; i++) {
             this.langueArray.push({  
                                     oid: langue[i].oid, 
                                     langue: langue[i].langue, 
                                     parle: langue[i].parle, 
                                     lue: langue[i].lue, 
                                     ecrit: langue[i].ecrit
                               });
   }


            //this.registerservice.candidatserv=this.candidat
         }),err=>{ console.log(err)}

         
  }



///////////////////////// Competence  //////////////////////////////////////////////////////


  onRazComepetence(){
      this.competenceForm.setValue({
      oid : "",
	    domaine: "",
	    detail: ""
    })
  }

  onEditComepetence(index){
      this.competenceForm.setValue({
      oid : this.competence[index].oid,
	    domaine: this.competence[index].domaine,
	    detail: this.competence[index].detail
    })
  }

  onSaveCompetence(){
     
    console.log(this.competenceForm.valid)
    console.log(this.competenceForm.value)
    var oidc = this.competenceForm.get('oid').value

    if(oidc==null || oidc==''){
             
                let competence={
                    domaine : this.competenceForm.get('domaine').value,
                    detail : this.competenceForm.get('detail').value,
                    candidat : {
                      oid : this.identiteForm.get('oid').value
                    }
               }
    
            console.log(competence)

            this.registerservice.add_competence(competence)
              .subscribe((response) => {
                this.ngOnInit();
                  alert("Succès enregistrement")
              },err=>{
              console.log(err)
            })
    
    }else{
        
         let competence={
                    oid : this.competenceForm.get('oid').value,
                    domaine : this.competenceForm.get('domaine').value,
                    detail : this.competenceForm.get('detail').value,
               }

               this.registerservice.edit_competence(competence)
              .subscribe((response) => {
                  alert("Succès modification")
                  this.ngOnInit();
              },err=>{
              console.log(err)
            })

    }

 }



 onDellCompetence(index:number){
   let oidc = this.competence[index]

    console.log(this.competence[index])

   this.registerservice.dell_competence(this.competence[index])
   .subscribe((response) => {
                  alert("Succès suppression")
                  this.ngOnInit();
              },err=>{
              console.log(err)
             })
 }


///////////////////////// Scolarite  //////////////////////////////////////////////////////

onRazScolarite(){
      this.scolariteForm.setValue({
         oid : '',
	       datedebut : '',
	       datefin : '',
	       domaine : '',
         specialite : '',
	       niveau : '',
	       pays : '',
         ville : ''
    })
  }

onSaveScolarite(){
  //console.log(this.scolariteForm.value)
  let oids=this.scolariteForm.get('oid').value

  if(oids==null || oids==''){
      
    let scolarite1 = this.scolariteForm.value
    let candidat= { 
          candidat : {
              oid : this.identiteForm.get('oid').value
          }
      }
   
    let scolarite = Object.assign(scolarite1,candidat)   
    //console.log(scolarite)
     this.registerservice.add_scolarite(scolarite)
   .subscribe((response) => {
                  alert("Succès enregistrement")
                  this.ngOnInit();
              },err=>{
              console.log(err)
             })

  }else{
  
    let scolarite = this.scolariteForm.value   
    //console.log(scolarite)
     this.registerservice.edit_scolarite(scolarite)
   .subscribe((response) => {
                  alert("Succès enregistrement")
                  this.ngOnInit();
              },err=>{
              console.log(err)
          })

  }
     
 
}


onEditScolarite(index){

      this.scolariteForm.setValue({
         oid : this.scolarite[index].oid,
	       datedebut : this.scolarite[index].datedebut,
	       datefin : this.scolarite[index].datefin,
	       domaine : this.scolarite[index].domaine,
         specialite : this.scolarite[index].specialite,
	       niveau : this.scolarite[index].niveau,
	       pays : this.scolarite[index].pays,
         ville : this.scolarite[index].ville
    })
  }

  onDellScolarite(index:number){
   let oidc = this.scolarite[index]

   this.registerservice.dell_scolarite(this.scolarite[index])
   .subscribe((response) => {
                  alert("Succès suppression")
                  this.ngOnInit();
              },err=>{
              console.log(err)
             })
 }


 //////////////////////// Experience //////////////////////////////

onRazExperience(){
      this.experienceForm.setValue({
         oid : '',
          datedebut : '',
          datefin : '',
          duree : '',
          entreprise : '',
          poste : '',
          tache : '',
          pays : '',
          ville : ''
    })
  }

 onSaveExperience(){
     //console.log(this.experienceForm.value)

    let oide=this.experienceForm.get('oid').value

    if(oide==null || oide==''){
            let experience1 = this.experienceForm.value
            let candidat= { 
                    candidat : {
                        oid : this.identiteForm.get('oid').value
                    }
                }
            
              let experience = Object.assign(experience1,candidat) 
              //console.log(scolarite)
              this.registerservice.add_experience(experience)
            .subscribe((response) => {
                            alert("Succès enregistrement")
                            this.ngOnInit();
                        },err=>{
                        console.log(err)
                      })

  }else{
  
    let experience = this.experienceForm.value 
    //console.log(scolarite)
     this.registerservice.edit_experience(experience)
   .subscribe((response) => {
                  alert("Succès enregistrement")
                  this.ngOnInit();
              },err=>{
              console.log(err)
          })

  }

 }


 onEditExperience(index){

      this.experienceForm.setValue({
          oid : this.experiencepro[index].oid,
          datedebut : this.experiencepro[index].datedebut,
          datefin : this.experiencepro[index].datefin,
          duree : this.experiencepro[index].duree,
          entreprise : this.experiencepro[index].entreprise,
          poste : this.experiencepro[index].poste,
          tache : this.experiencepro[index].tache,
          pays : this.experiencepro[index].pays,
          ville : this.experiencepro[index].ville
    })
  }


   onDellExperience(index:number){
   let oidc = this.experiencepro[index]

   this.registerservice.dell_experience(this.experiencepro[index])
   .subscribe((response) => {
                  alert("Succès suppression")
                  this.ngOnInit();
              },err=>{
              console.log(err)
             })
 }

////////////////////// Loisir ///////////////////////////////////////////////

onSaveLoisir(){
     //console.log(this.experienceForm.value)

    let oide=this.loisirForm.get('oid').value

    if(oide==null || oide==''){
            let loisir1 = this.loisirForm.value
            let candidat= { 
                    candidat : {
                        oid : this.identiteForm.get('oid').value
                    }
                }
            
              let loisir = Object.assign(loisir1,candidat) 
              //console.log(scolarite)
              this.registerservice.add_loisir(loisir)
            .subscribe((response) => {
                            alert("Succès enregistrement")
                            this.ngOnInit();
                        },err=>{
                        console.log(err)
                      })

  }else{
  
    let loisir = this.loisirForm.value 
    //console.log(scolarite)
     this.registerservice.edit_loisir(loisir)
    .subscribe((response) => {
                  alert("Succès enregistrement")
                  this.ngOnInit();
              },err=>{
              console.log(err)
          })

  }

 }




////////////////////////////// Langues ////////////////////////////////////////////

onAddLangue() { 
    this.langueArray.push({oid: '', langue: ['', Validators.required], parle: '', lue: '', ecrit: ''});
   // console.log('New row added successfully', 'New Row');
  }

onSaveLangue(index){

  console.log(this.langueArray)

    let oide=this.langueArray[index].oid

    if(oide==null || oide==''){
            let langue1 = this.langueArray[index]
            let candidat= { 
                    candidat : {
                        oid : this.identiteForm.get('oid').value
                    }
                }
            
              let langue = Object.assign(langue1,candidat) 
              //console.log(scolarite)
              this.registerservice.add_langue(langue)
              .subscribe((response) => {
                            this.langueArray = []
                            alert("Succès enregistrement")
                           // this.ngOnInit();
                        },err=>{
                        console.log(err)
                      })

  }else{
  
    let langue = this.langueArray[index] 
    //console.log(scolarite)
     this.registerservice.edit_langue(langue)
    .subscribe((response) => {
                  alert("Succès enregistrement")
                  this.langueArray = []
                 // this.ngOnInit();
              },err=>{
              console.log(err)
          })

  }

}

 onDellLangue(index) {

  this.registerservice.dell_langue(this.langueArray[index])
   .subscribe((response) => {
                  alert("Succès suppression")
                  this.langueArray=[]
                  this.ngOnInit();
              },err=>{
              console.log(err)
             })
    //this.langueArray.splice(index, 1);

  }



 listPays(){

   this.registerservice.list_countrie()
   .subscribe((data) => {
    console.log(this.listePays)
        this.listePays=data
              },err=>{
              console.log(err)
             })
 }

 

}
