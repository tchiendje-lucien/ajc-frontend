import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { myConst } from "../../../models/entreprise/settings";

@Injectable({
  providedIn: "root",
})
export class ChopperCandidatService {
  constructor(private http: HttpClient) {}

  create_chopper(chopper: any) {
    return this.http.post(myConst.url.concat("/create_chopper"), chopper);
  }
  
  cancel_chopper(chopper: any) {
    return this.http.put(myConst.url.concat("/cancel_chopper"), chopper);
  }

  list_chopper(entrepriseAccount: any) {
    return this.http.post(
      myConst.url.concat("/list_chopper"),
      entrepriseAccount
    );
  }
}
