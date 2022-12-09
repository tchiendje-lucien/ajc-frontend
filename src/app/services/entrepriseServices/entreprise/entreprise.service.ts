import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { myConst } from "../../../models/entreprise/settings";

@Injectable({
  providedIn: "root",
})
export class EntrepriseService {
  headers = { Authorization: "Bearer " + localStorage.getItem("token") };
  constructor(private http: HttpClient) {}

  create_entreprise(entreprise: any) {
    return this.http.post(myConst.url.concat("/create_entreprise"), entreprise);
  }

  create_entreprise_withoutLogo(entreprise: any) {
    return this.http.post(
      myConst.url.concat("/create_entreprise_withoutLogo"),
      entreprise
    );
  }

  update_entreprise(entreprise: any) {
    return this.http.put(myConst.url.concat("/update_entreprise"), entreprise);
  }

  update_entreprise_withoutLogo(entreprise: any) {
    return this.http.put(
      myConst.url.concat("/update_entreprise_withoutLogo"),
      entreprise
    );
  }

  list_entrepriseAccounts() {
    return this.http.get(myConst.url.concat("/list_entrepriseAccounts"));
  }

  login(user: any) {
    return this.http.post(myConst.url.concat("/login"), user, {
      observe: "response",
    });
  }

  find_user() {
    return this.http.get(myConst.url.concat("/find_user"));
  }

}
