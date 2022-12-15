import { Component, OnInit } from "@angular/core";
import { EntrepriseAccount } from "../../../models/entreprise/entreprise";
import { UsersService } from "../../../services/userServices/users.service";
import { RespoEntreprise } from "../../../models/entreprise/representants";
import { EntrepriseService } from '../../../services/entrepriseServices/entreprise/entreprise.service';
import { OffersService } from "../../../services/entrepriseServices/offers/offers.service";
import { Users } from "../../../models/entreprise/users";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.css"],
})
export class MyAccountComponent implements OnInit {
  //Model
  respoEntreprise: RespoEntreprise;
  entrepriseAccount: EntrepriseAccount;
  users: Users;
  respoList;
  entreprise;
  successClass;
  SuccessClass;

  //Model arrays
  respoEntrepriseList: RespoEntreprise[];
  entrepriseAccountList: EntrepriseAccount[];

  //Another proprieties
  p_academicLevel: number = 1;

  constructor(
    public entrepriseServices: EntrepriseService,
    public offersService: OffersService
  ) {}

  ngOnInit() {
    this.entrepriseAccount = new EntrepriseAccount();
    this.respoEntreprise = new RespoEntreprise();
    this.users = new Users();
    this.find_user();
  }

  find_user() {
    this.entrepriseServices.find_user().subscribe({
      next: (response) => {
        this.respoList = response["entrepriseAccount"]["respoEntreprises"];
        this.entreprise = response["entrepriseAccount"];
        this.users = response as Users;
        console.log(this.respoList);
        console.log(this.users);
      },
      error: (err1) => {
        console.log(err1.error);
      },
    });
  }
}
