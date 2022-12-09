import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { myConst } from "../../../models/entreprise/settings";

@Injectable({
  providedIn: "root",
})
export class AskProfileService {
  constructor(private http: HttpClient) {}

  create_ask_profile(demandeProfil: any) {
    return this.http.post(
      myConst.url.concat("/create_ask_profile"),
      demandeProfil
    );
  }

  update_ask_profile(demandeProfil: any) {
    return this.http.put(
      myConst.url.concat("/update_ask_profile"),
      demandeProfil
    );
  }

  delete_ask_profile(demandeProfil: any) {
    return this.http.put(
      myConst.url.concat("/delete_ask_profile"),
      demandeProfil
    );
  }

  list_ask_profile(entrepriseAccount: any) {
    return this.http.post(
      myConst.url.concat("/list_ask_profile"),
      entrepriseAccount
    );
  }

  edit_ask_profile(oid_AkProfile: any) {
    return this.http.get(
      myConst.url.concat("/edit_ask_profile/" + oid_AkProfile)
    );
  }
}
