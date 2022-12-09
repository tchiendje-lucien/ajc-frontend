import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { myConst } from "../../../models/entreprise/settings";

@Injectable({
  providedIn: "root",
})
export class MissionOffreService {
  constructor(private http: HttpClient) {}

  create_mission(mission: any) {
    return this.http.post(myConst.url.concat("/create_mission"), mission);
  }

  delete_mission(mission: any) {
    return this.http.post(myConst.url.concat("/delete_mission"), mission);
  }

  update_mission(mission: any) {
    return this.http.put(myConst.url.concat("/update_mission"), mission);
  }

  list_mission(offreEmplois: any) {
    return this.http.post(myConst.url.concat("/list_mission"), offreEmplois);
  }
}
