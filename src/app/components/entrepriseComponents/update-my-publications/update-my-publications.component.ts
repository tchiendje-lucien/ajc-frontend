import { Component, OnInit, ViewChild } from "@angular/core";
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
  ResponseClass,
} from "../../../models/entreprise/settings";
import { RespoEntreprise } from "../../../models/entreprise/representants";
import { EntrepriseAccount } from "../../../models/entreprise/entreprise";
import { SettingsService } from "../../../services/entrepriseServices/settings/settings.service";
import { EntrepriseService } from "../../../services/entrepriseServices/entreprise/entreprise.service";
import { OffersService } from "../../../services/entrepriseServices/offers/offers.service";
import { ActivatedRoute, Router } from "@angular/router";
import { OffreEmplois } from "../../../models/entreprise/offreEmplois";
import { MissionsOffre } from "../../../models/entreprise/missionsOffre";
import { CompetenceOffre } from "../../../models/entreprise/competenceOffre";
import * as $ from "jquery";
import { MissionOffreService } from "../../../services/entrepriseServices/missionOffre/mission-offre.service";
import { CompetenceOffreService } from "../../../services/entrepriseServices/competenceOffre/competence-offre.service";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-update-my-publications",
  templateUrl: "./update-my-publications.component.html",
  styleUrls: ["./update-my-publications.component.css"],
})
export class UpdateMyPublicationsComponent implements OnInit {
  //Model
  pays: Pays;
  activitySectors: ActivitySectors;
  respoEntreprise: RespoEntreprise;
  entrepriseAccount: EntrepriseAccount;
  errorClass: ErrorClass;
  offreEmplois: OffreEmplois;
  missionOffre: MissionsOffre;
  competenceOffre: CompetenceOffre;
  responseClass: ResponseClass;
  successClass;
  SuccessClass;

  //Model arrays
  paysList: Pays[];
  activitySectorsList: ActivitySectors[];
  respoEntrepriseList: RespoEntreprise[];
  entrepriseAccountList: EntrepriseAccount[];
  missionOffreList: MissionsOffre[];
  competenceOffreList: CompetenceOffre[];

  //Another proprieties
  offreForm: FormGroup;
  logoFileSlected: File;
  file_statut: boolean = true;
  btn_mission_state: boolean = true;
  missionTab = [{ name: null }];
  competenceTab = [{ name: null }];
  offre_oid = this.router.snapshot.paramMap.get("offre_oid");
  @ViewChild("closebutton") closebutton;
  missionErrorState: boolean = true;
  updateMissionErrorState: boolean = true;
  competenceErrorState: boolean = true;
  updateCompetenceErrorState: boolean = true;
  competenceResponse = {
    message: null,
    status: null,
  };
  missionResponse = {
    message: null,
    status: null,
  };

  offreResponse = {
    message: null,
    status: null,
  };
  datePipe = new DatePipe("en-US");
  todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");

  constructor(
    private formbulder: FormBuilder,
    private settings: SettingsService,
    private entrepriseServices: EntrepriseService,
    private offerServices: OffersService,
    private router: ActivatedRoute,
    private route: Router,
    private missionOffreService: MissionOffreService,
    private competenceOffreService: CompetenceOffreService
  ) {
    this.offreForm = this.formbulder.group({
      oid: new FormControl("", Validators.required),
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
    this.offreEmplois = new OffreEmplois();
    this.missionOffre = new MissionsOffre();
    this.competenceOffre = new CompetenceOffre();
    this.responseClass = new ResponseClass();
    this.list_ActivitySector();
    this.getCountriesListInAlphabetical();
    this.find_offre();
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

  find_offre() {
    this.offerServices.find_offre(this.offre_oid).subscribe({
      next: (response) => {
        this.offreEmplois = response as OffreEmplois;
        this.missionOffreList = this.offreEmplois.missionsOffres;
        this.competenceOffreList = this.offreEmplois.competenceOffres;
        console.log(this.offreEmplois);
        console.log(this.missionOffreList);
        console.log(this.competenceOffreList);
        this.offreForm.patchValue({
          oid: this.offreEmplois.oid,
          title: this.offreEmplois.title,
          detail: this.offreEmplois.detail,
          nbPlace: this.offreEmplois.nbPlace,
          dateline: this.offreEmplois.dateline,
          typeEmploi: this.offreEmplois.typeEmploi,
          pays: this.offreEmplois.pays,
          image: null,
          villes: this.offreEmplois.ville,
          typeContrat: this.offreEmplois.typeContrat,
          activitySectors: this.offreEmplois.activitySectors.oid,
        });
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
    this.missionTab.splice(index, 1);
  }

  addCompetence() {
    this.competenceTab.push({ name: null });
    console.log("New row added");
  }

  deleteCompetenceRow(index) {
    this.competenceTab.splice(index, 1);
  }

  update_offres() {
    if (this.offreForm.valid) {
      let offreEmploiFormData = new FormData();
      let emploiForm = {
        oid: this.offreForm.get("oid").value,
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

      console.log(emploiForm);

      if (
        this.logoFileSlected == null ||
        this.logoFileSlected.name == "" ||
        this.logoFileSlected == undefined
      ) {
        offreEmploiFormData.append("offreEmplois", JSON.stringify(emploiForm));

        this.offerServices.update_withoutImage(offreEmploiFormData).subscribe({
          next: (response) => {
            this.offreResponse.message = response["message"];
            this.offreResponse.status = response["status"];
            $(".success-div").show();
            setTimeout(function () {
              $(".success-div").hide();
            }, 5000);
            this.reset_responseClass();
          },
          error: (err) => {
            console.log(err.error);
          },
        });
      } else {
        console.log("bonjour else");
        offreEmploiFormData.append("offreEmplois", JSON.stringify(emploiForm));

        offreEmploiFormData.append(
          "image",
          this.logoFileSlected,
          this.logoFileSlected.name
        );

        this.offerServices.update_offre(offreEmploiFormData).subscribe({
          next: (response) => {
            this.offreResponse.message = response["message"];
            this.offreResponse.status = response["status"];
            $(".success-div").show();
            setTimeout(function () {
              $(".success-div").hide();
            }, 5000);
            this.reset_responseClass();
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

  update_missionOffre(index) {
    if (index.name == null || index.name == "") {
      this.updateMissionErrorState = false;
      alert("Veillez remplir le champ");
    } else {
      this.updateMissionErrorState = true;
      this.missionOffre = index;
      this.missionOffreService.update_mission(this.missionOffre).subscribe({
        next: (response) => {
          this.missionResponse.message = response["message"];
          this.missionResponse.status = response["status"];
          this.list_mission();
          $(".success-mission-div").show();
          setTimeout(function () {
            $(".success-mission-div").hide();
          }, 5000);
          this.reset_responseClass();
        },
        error: (err) => {
          console.log(err.error);
        },
      });
    }
  }

  delete_missionOffre(index) {
    this.missionOffre = index;
    if (confirm("voullez vous vraiment effectuer cette suppression?")) {
      this.missionOffreService.delete_mission(this.missionOffre).subscribe({
        next: (response) => {
          this.missionResponse.message = response["message"];
          this.missionResponse.status = response["status"];
          this.list_mission();
          $(".success-mission-div").show();
          setTimeout(function () {
            $(".success-mission-div").hide();
          }, 5000);
          this.reset_responseClass();
        },
        error: (err) => {
          console.log(err.error);
        },
      });
    } else {
      return;
    }
  }

  save_mission(index, i) {
    if (index.name == null || index.name == "") {
      this.missionErrorState = false;
    } else {
      this.missionErrorState = true;
      let missionForm = {
        oid: null,
        name: index.name,
        offreEmplois: { oid: this.offreEmplois.oid },
      };
      this.missionOffreService.create_mission(missionForm).subscribe({
        next: (response) => {
          this.missionResponse.message = response["message"];
          this.missionResponse.status = response["status"];
          this.list_mission();
          this.missionTab.splice(i, 1);
          $(".success-mission-div").show();
          setTimeout(function () {
            $(".success-mission-div").hide();
          }, 5000);
          this.reset_responseClass();
        },
        error: (err) => {
          console.log(err.error);
        },
      });
    }
  }

  list_mission() {
    this.missionOffreService.list_mission(this.offreEmplois).subscribe({
      next: (response) => {
        this.missionOffreList = response as Array<MissionsOffre>;
        console.log(this.missionOffreList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  update_competence(index) {
    if (index.name == null || index.name == "") {
      alert("Veillez remplir le champ");
    } else {
      this.competenceOffre = index;
      this.competenceOffreService
        .update_competence(this.competenceOffre)
        .subscribe({
          next: (response) => {
            this.competenceResponse.message = response["message"];
            this.competenceResponse.status = response["status"];
            this.list_competence();
            $(".success-competence-div").show();
            setTimeout(function () {
              $(".success-competence-div").hide();
            }, 5000);
            this.reset_responseClass();
          },
          error: (err) => {
            console.log(err.error);
          },
        });
    }
  }

  delete_competence(index) {
    this.competenceOffre = index;
    if (confirm("voullez vous vraiment effectuer cette suppression?")) {
      this.competenceOffreService
        .delete_competence(this.competenceOffre)
        .subscribe({
          next: (response) => {
            this.competenceResponse.message = response["message"];
            this.competenceResponse.status = response["status"];
            this.list_competence();
            $(".success-competence-div").show();
            setTimeout(function () {
              $(".success-competence-div").hide();
            }, 5000);
          },
          error: (err) => {
            console.log(err.error);
          },
        });
    } else {
      return;
    }
  }

  save_competence(index, i) {
    if (index.name == null || index.name == "") {
      this.competenceErrorState = false;
    } else {
      let competenceForm = {
        oid: null,
        name: index.name,
        offreEmplois: { oid: this.offreEmplois.oid },
      };
      this.competenceOffreService.create_competence(competenceForm).subscribe({
        next: (response) => {
          this.competenceResponse.message = response["message"];
          this.competenceResponse.status = response["status"];
          this.list_competence();
          this.competenceTab.splice(i, 1);
          $(".success-competence-div").show();
          setTimeout(function () {
            $(".success-competence-div").hide();
          }, 5000);
        },
        error: (err) => {
          console.log(err.error);
        },
      });
    }
  }

  list_competence() {
    this.competenceOffreService.list_competence(this.offreEmplois).subscribe({
      next: (response) => {
        this.competenceOffreList = response as Array<CompetenceOffre>;
        console.log(this.competenceOffreList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  reset_responseClass() {
    this.responseClass = null;
  }

  supprimer_offre() {
    if (confirm("voullez vous vraiment effectuer cette suppression?")) {
      this.offerServices.supprimer_offre(this.offreEmplois).subscribe({
        next: (response) => {
          alert(response["message"]);
          this.route.navigate(["entreprise/my-publications"]);
        },
        error: (err) => {
          console.log(err.error);
        },
      });
    } else {
      return;
    }
  }
}
