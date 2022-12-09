import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";
import * as $ from "jquery";
import { DemandeProfil } from "../../../models/entreprise/demandeProfil";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { AskProfileService } from "../../../services/entrepriseServices/askProfile/ask-profile.service";
@Component({
  selector: "app-update-ask-profile",
  templateUrl: "./update-ask-profile.component.html",
  styleUrls: ["./update-ask-profile.component.css"],
})
export class UpdateAskProfileComponent implements OnInit {
  selectedExperience: number;
  askProfileForm: FormGroup;
  demandeProfil: DemandeProfil;
  demandeProfilLis: DemandeProfil[];
  experienceTab = [
    { id: "Jeune diplomé", name: "Jeune diplomé" },
    { id: "Moins de 3 ans d'experience", name: "Moins de 3 ans d'experience" },
    { id: "3 à 5 ans d'experience", name: "3 à 5 ans d'experience" },
    { id: "5 à 10 ans d'experience", name: "5 à 10 ans d'experience" },
    { id: "plus de 10 ans d'experience", name: "plus de 10 ans d'experience" },
  ];

  schooLevelTab = [
    { id: "Aucun", name: "Aucun" },
    { id: "CEP", name: "CEP" },
    { id: "BEPC/CAP/GCE-OL", name: "BEPC/CAP/GCE-OL" },
    { id: "Probatoire", name: "Probatoire" },
    { id: "Baccalaureat/GCE-AL", name: "Baccalaureat/GCE-AL" },
    { id: "BTS/HND", name: "BTS/HND" },
    { id: "Licence/Bachelor", name: "Licence/Bachelor" },
    { id: "Master", name: "Master" },
    { id: "Diplome d'ingenieur", name: "Diplome d'ingenieur" },
    { id: "Doctorat", name: "Doctorat" },
  ];

  civilityTab = [
    { id: "Homme", name: "Homme" },
    { id: "Femme", name: "Femme" },
    { id: "Homme/Femme", name: "Homme/Femme" },
  ];

  matrimonialStatusTab = [
    { id: "Marié", name: "Marié" },
    { id: "Celibataire", name: "Celibataire" },
  ];

  contratTypeTab = [
    { id: "CDD", name: "CDD" },
    { id: "CDI", name: "CDI" },
  ];

  horaireTab = [
    { id: "Temps plein", name: "Temps plein" },
    { id: "Temps partiel", name: "Temps partiel" },
  ];

  actionTab = [
    { id: "Placement", name: "Placement" },
    { id: "Mise à la disposition", name: "Mise à la disposition" },
  ];

  datePipe = new DatePipe("en-US");
  todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
  askProfile_oid = this.router.snapshot.paramMap.get("askProfile_oid");

  constructor(
    private formbulder: FormBuilder,
    private askProfileService: AskProfileService,
    private route: Router,
    private router: ActivatedRoute
  ) {
    this.askProfileForm = formbulder.group({
      oid: new FormControl(),
      poste: new FormControl(null, Validators.required),
      experience: new FormControl(null, Validators.required),
      // title: new FormControl(null, Validators.required),
      domaineFormaton: new FormControl(null, Validators.required),
      dateline: new FormControl(null, Validators.required),
      nivScolaire: new FormControl(null, Validators.required),
      competence: new FormControl(),
      civiliy: new FormControl(null, Validators.required),
      statutMatrimonial: new FormControl(null, Validators.required),
      nbProfil: new FormControl(null, Validators.required),
      typeContrat: new FormControl(null, Validators.required),
      horaireTravail: new FormControl(null, Validators.required),
      recrutement: new FormControl(null, Validators.required),
      lieuTravail: new FormControl(null, Validators.required),
      description: new FormControl(),
    });
  }

  ngOnInit() {
    this.demandeProfil = new DemandeProfil();
    this.edit_ask_profile();
  }

  get poste_askProfile() {
    return this.askProfileForm.get("poste");
  }
  get experience_askProfile() {
    return this.askProfileForm.get("experience");
  }
  get domaineFormaton_askProfile() {
    return this.askProfileForm.get("domaineFormaton");
  }
  get dateline_askProfile() {
    return this.askProfileForm.get("dateline");
  }
  get nivScolaire_askProfile() {
    return this.askProfileForm.get("nivScolaire");
  }
  get civiliy_askProfile() {
    return this.askProfileForm.get("civiliy");
  }
  get statutMatrimonial_askProfile() {
    return this.askProfileForm.get("statutMatrimonial");
  }
  get nbProfil_askProfile() {
    return this.askProfileForm.get("nbProfil");
  }
  get typeContrat_askProfile() {
    return this.askProfileForm.get("typeContrat");
  }
  get horaireTravail_askProfile() {
    return this.askProfileForm.get("horaireTravail");
  }
  get recrutement_askProfile() {
    return this.askProfileForm.get("recrutement");
  }
  get lieuTravail_askProfile() {
    return this.askProfileForm.get("lieuTravail");
  }

  update_ask_profile() {
    if (this.askProfileForm.valid) {
      let askProfileSaveForm = {
        oid: this.askProfileForm.get("oid").value,
        poste: this.askProfileForm.get("poste").value,
        experience: this.askProfileForm.get("experience").value,
        domaineFormaton: this.askProfileForm.get("domaineFormaton").value,
        dateline: this.askProfileForm.get("dateline").value,
        nivScolaire: this.askProfileForm.get("nivScolaire").value,
        competence: this.askProfileForm.get("competence").value,
        civiliy: this.askProfileForm.get("civiliy").value,
        statutMatrimonial: this.askProfileForm.get("statutMatrimonial").value,
        nbProfil: this.askProfileForm.get("nbProfil").value,
        typeContrat: this.askProfileForm.get("typeContrat").value,
        horaireTravail: this.askProfileForm.get("horaireTravail").value,
        recrutement: this.askProfileForm.get("recrutement").value,
        lieuTravail: this.askProfileForm.get("lieuTravail").value,
        description: this.askProfileForm.get("description").value,
        entrepriseAccount: {
          oid: atob(localStorage.getItem("entreprise_oid")),
        },
      };

      console.log(askProfileSaveForm);

      this.askProfileService.update_ask_profile(askProfileSaveForm).subscribe({
        next: (response) => {
          alert(response["message"]);
          this.route.navigate(["entreprise/my-profile"]);
        },
        error: (err) => {
          console.log(err.error);
        },
      });
    } else {
      alert("Veillez remplir tous les champs obligatoire du formulaire");
    }
  }

  edit_ask_profile() {
    this.askProfileService.edit_ask_profile(this.askProfile_oid).subscribe({
      next: (response) => {
        this.demandeProfil = response as DemandeProfil;
        this.askProfileForm.patchValue({
          oid: this.demandeProfil.oid,
          poste: this.demandeProfil.poste,
          experience: this.demandeProfil.experience,
          domaineFormaton: this.demandeProfil.domaineFormaton,
          dateline: this.demandeProfil.dateline,
          nivScolaire: this.demandeProfil.nivScolaire,
          competence: this.demandeProfil.competence,
          civiliy: this.demandeProfil.civiliy,
          statutMatrimonial: this.demandeProfil.statutMatrimonial,
          nbProfil: this.demandeProfil.nbProfil,
          typeContrat: this.demandeProfil.typeContrat,
          horaireTravail: this.demandeProfil.horaireTravail,
          recrutement: this.demandeProfil.recrutement,
          lieuTravail: this.demandeProfil.lieuTravail,
          description: this.demandeProfil.description,
        });
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  delete_ask_profile() {
    this.askProfileService.delete_ask_profile(this.demandeProfil).subscribe({
      next: (response) => {
        alert(response["message"]);
        this.route.navigate(["entreprise/my-profile"]);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }
}
