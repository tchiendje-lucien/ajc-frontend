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

  //Model arrays
  paysList: Pays[];
  activitySectorsList: ActivitySectors[];
  respoEntrepriseList: RespoEntreprise[];
  entrepriseAccountList: EntrepriseAccount[];

  //Another proprieties
  p_academicLevel: number = 1;

  constructor(
    private entrepriseServices: EntrepriseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.pays = new Pays();
    this.entrepriseAccount = new EntrepriseAccount();
    this.respoEntreprise = new RespoEntreprise();
    this.find_user();
  }

  find_user() {
    this.entrepriseServices.find_user().subscribe({
      next: (response) => {
        this.entrepriseAccount = response as EntrepriseAccount;
        localStorage.setItem(
          "entreprise_oid",
          String(btoa(String(this.entrepriseAccount.oid)))
        );
        console.log(String(this.entrepriseAccount.oid));
        console.log(btoa(String(this.entrepriseAccount.oid)));
        console.log(atob(localStorage.getItem("entreprise_oid")));
      },
      error: (err1) => {
        console.log(err1.error);
      },
    });
  }

  find_profile(){
    this.router.navigate(["candidate/profile-detail"])
  }
}
