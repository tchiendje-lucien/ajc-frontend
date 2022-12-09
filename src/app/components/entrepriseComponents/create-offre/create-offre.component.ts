import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  Pays,
  ActivitySectors,
  ErrorClass,
} from "../../../models/entreprise/settings";
import { RespoEntreprise } from "../../../models/entreprise/representants";
import { EntrepriseAccount } from "../../../models/entreprise/entreprise";
import { SettingsService } from "../../../services/entrepriseServices/settings/settings.service";
import { EntrepriseService } from "../../../services/entrepriseServices/entreprise/entreprise.service";
import { OffersService } from "../../../services/entrepriseServices/offers/offers.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-create-offre",
  templateUrl: "./create-offre.component.html",
  styleUrls: ["./create-offre.component.css"],
})
export class CreateOffreComponent implements OnInit {
  //Model
  pays: Pays;
  activitySectors: ActivitySectors;
  respoEntreprise: RespoEntreprise;
  entrepriseAccount: EntrepriseAccount;
  errorClass: ErrorClass;
  successClass;
  SuccessClass;

  //Model arrays
  paysList: Pays[];
  activitySectorsList: ActivitySectors[];
  respoEntrepriseList: RespoEntreprise[];
  entrepriseAccountList: EntrepriseAccount[];

  //Another proprieties
  offreForm: FormGroup;
  logoFileSlected: File;
  file_statut: boolean = true;
  btn_mission_state: boolean = true;
  missionTab = [{ name: null }];
  competenceTab = [{ name: null }];
  datePipe = new DatePipe("en-US");
  todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");

  constructor(
    private formbulder: FormBuilder,
    private settings: SettingsService,
    private entrepriseServices: EntrepriseService,
    private offerServices: OffersService
  ) {
    this.offreForm = this.formbulder.group({
      //oid: new FormControl(-1, Validators.required),
      title: new FormControl("", Validators.required),
      detail: new FormControl(),
      nbPlace: new FormControl("", [Validators.required]),
      dateline: new FormControl("", Validators.required),
      typeEmploi: new FormControl("undefined", Validators.required),
      pays: new FormControl("undefined", Validators.required),
      // competenceOffres: new FormControl("", Validators.required),
      //missionsOffres: new FormControl(),
      image: new FormControl(),
      villes: new FormControl("", Validators.required),
      typeContrat: new FormControl("undefined", Validators.required),
      activitySectors: new FormControl("undefined", Validators.required),
    });
  }

  ngOnInit() {
    this.errorClass = new ErrorClass();
    this.list_ActivitySector();
    this.getCountriesListInAlphabetical();
  }

  get title_offre() {
    return this.offreForm.get("title");
  }
  // get detail_offre() {
  //   return this.offreForm.get("detail");
  // }
  get nbPlace_offre() {
    return this.offreForm.get("nbPlace");
  }
  get dateline_offre() {
    return this.offreForm.get("dateline");
  }
  get typeEmploi_offre() {
    return this.offreForm.get("typeEmploi");
  }
  get villes_offre() {
    return this.offreForm.get("villes");
  }
  get typeContrat_offre() {
    return this.offreForm.get("typeContrat");
  }
  get activitySectors_offre() {
    return this.offreForm.get("activitySectors");
  }
  get pays_offre() {
    return this.offreForm.get("activitySectors");
  }
  // get missionsOffres_offre() {
  //   return this.offreForm.get("missionsOffres");
  // }
  // get competenceOffres_offre() {
  //   return this.offreForm.get("competenceOffres");
  // }

  list_ActivitySector() {
    this.settings.list_ActivitySector().subscribe({
      next: (response) => {
        this.activitySectorsList = response as Array<ActivitySectors>;
        // console.log(this.activitySectorsList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  getCountriesListInAlphabetical() {
    this.settings.getCountriesListInAlphabetical().subscribe({
      next: (response) => {
        this.paysList = response as Array<Pays>;
        //console.log(this.paysList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  onFileChangedLogo(event) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      console.log(file);
      if (file.type == "image/jpeg") {
        this.logoFileSlected = event.target.files[0];
        console.log("correct");
        this.file_statut = true;
      } else {
        this.file_statut = false;
        //call validation
        this.offreForm.get("image").reset();
        this.offreForm.controls["image"].setValidators([Validators.required]);
        this.offreForm.get("image").updateValueAndValidity();
      }
    }
  }

  addMission() {
    this.missionTab.push({ name: null });
    console.log("New row added");
  }

  // changeMissionName() {
  //   let tpmTab = this.missionTab[this.missionTab.length - 1];

  //     if (tpmTab.name == null || tpmTab.name == "") {
  //       this.btn_mission_state = true;
  //     } else {
  //       this.btn_mission_state = false;
  //     }

  // }

  deleteMissionRow(index) {
    if (this.missionTab.length == 1) {
      alert("impossioble");
    } else {
      this.missionTab.splice(index, 1);
    }
  }

  addCompetence() {
    this.competenceTab.push({ name: null });
    console.log("New row added");
  }

  deleteCompetenceRow(index) {
    if (this.competenceTab.length == 1) {
      alert("impossioble");
    } else {
      this.competenceTab.splice(index, 1);
    }
  }

  create_offres() {
    if (this.offreForm.valid) {
      let offreEmploiFormData = new FormData();
      let objetMission = [];
      let objetCompetence = [];

      let emploiForm = {
        title: this.offreForm.get("title").value,
        detail: this.offreForm.get("detail").value,
        nbPlace: this.offreForm.get("nbPlace").value,
        dateline: this.offreForm.get("dateline").value,
        typeEmploi: this.offreForm.get("typeEmploi").value,
        typeContrat: this.offreForm.get("typeContrat").value,
        activitySectors: { oid: this.offreForm.get("activitySectors").value },
        ville: this.offreForm.get("villes").value,
        pays: this.offreForm.get("pays").value,
        entrepriseAccount: {
          oid: atob(localStorage.getItem("entreprise_oid")),
        },
      };
      this.missionTab.forEach(function (item) {
        objetMission.push({
          name: item.name,
        });
      });

      this.competenceTab.forEach(function (item) {
        objetCompetence.push({
          name: item.name,
        });
      });

      console.log(objetMission);
      console.log(objetCompetence);
      console.log(emploiForm);

      if (
        this.logoFileSlected == null ||
        this.logoFileSlected.name == "" ||
        this.logoFileSlected == undefined
      ) {
        offreEmploiFormData.append("offreEmplois", JSON.stringify(emploiForm));
        offreEmploiFormData.append(
          "missionsOffres",
          JSON.stringify(objetMission)
        );
        offreEmploiFormData.append(
          "competenceOffres",
          JSON.stringify(objetCompetence)
        );

        this.offerServices.create_withoutImage(offreEmploiFormData).subscribe({
          next: (response) => {
            this.errorClass.message = response["message"];
            this.errorClass.status = response["status"];
            alert(response["message"]);
          },
          error: (err) => {
            console.log(err.error);
          },
        });
      } else {
        console.log("bonjour else");
        offreEmploiFormData.append("offreEmplois", JSON.stringify(emploiForm));
        offreEmploiFormData.append(
          "missionsOffres",
          JSON.stringify(objetMission)
        );
        offreEmploiFormData.append(
          "competenceOffres",
          JSON.stringify(objetCompetence)
        );

        offreEmploiFormData.append(
          "image",
          this.logoFileSlected,
          this.logoFileSlected.name
        );

        this.offerServices.create_offre(offreEmploiFormData).subscribe({
          next: (response) => {
            alert(response["message"]);
          },
          error: (err) => {
            console.log(err.error);
          },
        });
      }
    } else {
      this.errorClass.message = "Veillez remplir tous les champs obligatoire";
      this.errorClass.status = false;
    }
  }
}
