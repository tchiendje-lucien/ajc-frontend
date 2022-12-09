import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { myConst } from "../../models/entreprise/settings";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private router: Router, private http: HttpClient) {}

  isLoggedIn(): boolean {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != null
    ) {
      console.log(localStorage.getItem("token"));
      // console.log(this.jwtHelper.isTokenExpired(localStorage.getItem("token")))
      //     if (this.jwtHelper.isTokenExpired(localStorage.getItem("token"))) {
      //       this.router.navigate(["entreprise/login"]);
      //       return false;
      //     } else {
      //       return true;
      //     }
    }
    return false;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("entreprise_oid")
    this.router.navigate(["entreprise/login"]);
  }

  verified_token() {
    return this.http.get(myConst.url.concat("/verified_token"), {
      observe: "response",
    });
  }

  isTokenExpired(token: string) {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return expiry * 1000 > Date.now();
  }
}
