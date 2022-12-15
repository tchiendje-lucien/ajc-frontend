import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { EntrepriseService } from "../../../services/entrepriseServices/entreprise/entreprise.service";
import * as $ from "jquery";

@Component({
  selector: "app-login-entreprise",
  templateUrl: "./login-entreprise.component.html",
  styleUrls: ["./login-entreprise.component.css"],
})
export class LoginEntrepriseComponent implements OnInit {
  loginError = {
    message: null,
    status: null,
  };
  constructor(
    private formbulder: FormBuilder,
    private entrepriseServices: EntrepriseService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.find_user();
  }

  loginForm = this.formbulder.group({
    entrepriseId: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  get entrepriseId_login() {
    return this.loginForm.get("entrepriseId");
  }
  get password_login() {
    return this.loginForm.get("password");
  }
  login_user() {
    let jwtHelper = new JwtHelperService();
    if (this.loginForm.valid) {
      let user = {
        identifiant: this.loginForm.get("entrepriseId").value,
        role: null,
        password: this.loginForm.get("password").value,
        re_password: null,
      };
      this.entrepriseServices.login(user).subscribe({
        next: (response) => {
          let token = response.headers.get("Authorization");
          let statusCode = response.headers.get("status");
          localStorage.setItem("token", token);
          // this.find_user()
          this.router.navigate(["candidate/find-profile"]);
          console.log(response);
          // console.log(localStorage.getItem("token"));
        },
        error: (err) => {
          // let statusCode = err.headers.get("status");
          // console.log(statusCode);
          this.loginError.status = 403;
          this.loginError.message = "Identifiant ou mot de passe erroné";
          $(".error-div").show();
          setTimeout(function () {
            $(".error-div").hide();
          }, 5000);
          console.log(err);
        },
      });
    } else {
      alert("Veillez remplir tous les champs obligatoire");
    }
  }

  find_user() {
    this.entrepriseServices.find_user().subscribe({
      next: (response1) => {
        console.log(response1);
      },
      error: (err1) => {
        console.log(err1.error);
      },
    });
  }
}
