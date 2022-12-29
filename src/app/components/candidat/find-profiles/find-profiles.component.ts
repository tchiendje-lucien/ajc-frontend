import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EntrepriseService } from "../../../services/entrepriseServices/entreprise/entreprise.service";
import {
  Pays,
  ActivitySectors,
  ErrorClass,
} from "../../../models/entreprise/settings";
import { RespoEntreprise } from "../../../models/entreprise/representants";
import { EntrepriseAccount } from "../../../models/entreprise/entreprise";
import { RegisterService } from "src/app/services/candidat/register.service";
import * as moment from "moment";
import { THROW_IF_NOT_FOUND } from "@angular/core/src/di/injector";
import { ChopperCandidatService } from "../../../services/entrepriseServices/chopperCandidat/chopper-candidat.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-find-profiles",
  templateUrl: "./find-profiles.component.html",
  styleUrls: ["./find-profiles.component.css"],
})
export class FindProfilesComponent implements OnInit {
  //Model
  pays: Pays;
  activitySectors: ActivitySectors;
  respoEntreprise: RespoEntreprise;
  entrepriseAccount: EntrepriseAccount;
  errorClass: ErrorClass;
  successClass;
  SuccessClass;
  listCandidat;
  listCandidatLength;
  age;

  //Model arrays
  paysList: Pays[];
  activitySectorsList: ActivitySectors[];
  respoEntrepriseList: RespoEntreprise[];
  entrepriseAccountList: EntrepriseAccount[];

  //Another proprieties
  p_profile: number = 1;

  constructor(
    private entrepriseServices: EntrepriseService,
    private router: Router,
    private registerservice: RegisterService,
    private chopperCandidatService: ChopperCandidatService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    console.log("je suis icic");
    console.log(atob(localStorage.getItem("entreprise_oid")))
    this.pays = new Pays();
    this.entrepriseAccount = new EntrepriseAccount();
    this.respoEntreprise = new RespoEntreprise();
    // this.find_user();
    this.list_candidat();
  }

  list_candidat() {
    this.spinner.show();
    this.registerservice.list_candidat().subscribe(
      (response) => {
        this.spinner.hide();
        console.log(response);
        this.listCandidat = response;
        this.listCandidatLength = this.listCandidat.length
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public CalculateAge(birthdate): number {
    return moment().diff(birthdate, "years");
  }

  find_user() {
    this.entrepriseServices.find_user().subscribe({
      next: (response) => {
        console.log(response);
        this.entrepriseAccount = response as EntrepriseAccount;
        localStorage.setItem(
          "entreprise_oid",
          String(btoa(String(this.entrepriseAccount.oid)))
        );
        console.log("un exprire" + localStorage.getItem("token"));
        console.log(response);
        // console.log(btoa(String(this.entrepriseAccount.oid)));
        // console.log(atob(localStorage.getItem("entreprise_oid")));
      },
      error: (err1) => {
        console.log(err1.error);
      },
    });
  }

  find_profile() {
    this.router.navigate(["candidate/profile-detail"]);
  }

  create_chopper(index) {
    let chopper = {
      entrepriseAccount: {
        oid: Number(atob(localStorage.getItem("entreprise_oid"))),
      },
      candidat: { oid: index.oid },
    };
    // console.log(chopper);
    this.chopperCandidatService.create_chopper(chopper).subscribe({
      next: (response) => {
        this.toastr.success(response["message"], "Success");
        // alert(response["message"]);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  testToast() {
    // alert("ceci est un test")
    this.toastr.success("Hello world!", "Hello world!");
  }

  testSpinner() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }
}
