import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { UsersService } from "../../userServices/users.service";

@Injectable({
  providedIn: "root",
})
export class AuthService implements CanActivate {
  constructor(private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   console.log("OnlyLoggedInUsers");
  //   if (this.isTokenExpired(localStorage.getItem("token"))) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  isTokenExpired(token: string) {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log("OnlyLoggedInUsers");
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != null
    ) {
      if (this.isTokenExpired(localStorage.getItem("token"))) {
        console.log(this.isTokenExpired(localStorage.getItem("token")));
        console.log(localStorage.getItem("token"));
        this.router.navigate(["entreprise/login"]);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(["entreprise/login"]);
      return false;
    }
  }
}

@Injectable({
  providedIn: "root",
})
export class AuthServiceCandidtat implements CanActivate {
  constructor( private router: Router) {}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean | Promise<boolean> | Observable<boolean> {
  //   console.log("OnlyLoggedInUsers");
  //   if (this.isTokenExpired(localStorage.getItem("token"))) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  isTokenExpired(token: string) {
    const expiry = JSON.parse(atob(token.split(".")[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log("OnlyLoggedInUsers");
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") != null
    ) {
      if (this.isTokenExpired(localStorage.getItem("token"))) {
        console.log(this.isTokenExpired(localStorage.getItem("token")));
        console.log(localStorage.getItem("token"));
        this.router.navigate(["candidat/login"]);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(["candidat/login"]);
      return false;
    }
  }
}
