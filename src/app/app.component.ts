import { Component } from "@angular/core";
import { UsersService } from "./services/userServices/users.service";
import { RegisterService } from "./services/candidat/register.service";
import { Users } from "./models/entreprise/users";
import { EntrepriseService } from './services/entrepriseServices/entreprise/entreprise.service';
import { EntrepriseAccount } from './models/entreprise/entreprise';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "ajc-fontend";
  candidatconnecter: String;
  users: Users;
  entrepriseAccount: EntrepriseAccount;

  constructor(
    public usersService: UsersService,
    private registerservice: RegisterService,
    public entrepriseServices: EntrepriseService,
    public entrepriseService: EntrepriseService
  ) {}

  ngOnInit(): void {
    this.users = new Users();
    this.registerservice.loadToken();
    // console.log(this.router.url)
    this.entrepriseAccount = new EntrepriseAccount();
    this.users = new Users();
    this.find_user();
  }

  isAdmin() {
    return this.registerservice.isAdmin();
  }

  isAuthenticated() {
    return this.registerservice.isAuthenticated();
  }

  isAuthenticatedEntreprise(): boolean {
    if (this.usersService.isLoggedIn()) {
      // this.find_user();
      return true;
    } else {
      return false;
    }
  }

  isCandidat() {
    return this.registerservice.isCandidat();
  }

  toDeconnected() {
    this.registerservice.toDeconnected();
    // window.location.reload();
  }

  candadatConnected() {
    this.candidatconnecter = this.registerservice.candidatConnected();
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
