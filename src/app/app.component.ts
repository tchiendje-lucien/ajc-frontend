import { Component, OnInit } from "@angular/core";
import { UsersService } from "./services/userServices/users.service";
import { RegisterService } from "./services/candidat/register.service";
import { Users } from "./models/entreprise/users";
import { EntrepriseService } from "./services/entrepriseServices/entreprise/entreprise.service";
import { EntrepriseAccount } from "./models/entreprise/entreprise";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "ajc-fontend";
  candidatconnecter: String;
  users: Users;
  userconnecter: String;
  entrepriseAccount: EntrepriseAccount;
  name: String;
  logo: String;
  entreprise_oid: number;

  constructor(
    public usersService: UsersService,
    private registerservice: RegisterService,
    public entrepriseServices: EntrepriseService,
    public entrepriseService: EntrepriseService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.users = new Users();
    this.registerservice.loadToken();
    // console.log(this.router.url)
    this.entrepriseAccount = new EntrepriseAccount();
    this.users = new Users();
    // this.find_user();
  }

  isAdmin() {
    return this.registerservice.isAdmin();
  }

  isAuthenticatedEntreprise() {
    // return this.registerservice.isAuthenticated();
    if (this.usersService.isLoggedIn()) {
      this.name = localStorage.getItem("name");
      this.logo = localStorage.getItem("logo");
      this.entreprise_oid = Number(
        atob(localStorage.getItem("entreprise_oid"))
      );
      // this.find_user();

      return true;
    } else {
      return false;
    }
  }

  isEntreprise() {
    return this.registerservice.isEntreprise();
  }

  isAuthenticated() {
    this.userconnecter = this.registerservice.candidat;
    return this.registerservice.isAuthenticated();
  }

  isCandidat() {
    return this.registerservice.isCandidat();
  }

  toDeconnected() {
    this.registerservice.toDeconnected();
    // window.location.reload();
  }

  // candadatConnected() {
  //   this.candidatconnecter = this.registerservice.candidatConnected();
  // }
  showSuccess() {
    this.toastr.success("Hello world!", "Toastr fun!");
  }

  find_user() {
    this.entrepriseServices.find_user().subscribe({
      next: (response) => {
        this.users = response as Users;
        console.log(this.users);
      },
      error: (err1) => {
        console.log(err1.error);
      },
    });
  }
}
