import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { myConst } from "../../models/entreprise/settings";
import { AuthService } from "../guards/auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  isLoggedIn(): boolean {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != null
    ) {
      if (this.authService.isTokenExpired(localStorage.getItem("token"))) {
        console.log("genial");
        return false;
      } else {
        console.log(localStorage.getItem("token"));
        return true;
      }
    }
    console.log("genie");
    return false;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("entreprise_oid");
    this.router.navigate(["entreprise/login"]);
  }

  verified_token() {
    return this.http.get(myConst.url.concat("/verified_token"), {
      observe: "response",
    });
  }

  // isTokenExpired(token: string) {
  //   const expiry = JSON.parse(atob(token.split(".")[1])).exp;
  //   return expiry * 1000 > Date.now();
  // }

  change_password(users: any) {
    return this.http.put(myConst.url.concat("/change_password"), users);
  }

  update_username(users: any) {
    return this.http.put(myConst.url.concat("/update_username"), users);
  }
}
