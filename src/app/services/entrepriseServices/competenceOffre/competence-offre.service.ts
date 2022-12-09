import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { myConst } from "../../../models/entreprise/settings";

@Injectable({
  providedIn: "root",
})
export class CompetenceOffreService {
  constructor(private http: HttpClient) {}

  create_competence(competenceOffre: any) {
    return this.http.post(
      myConst.url.concat("/create_competence"),
      competenceOffre
    );
  }

  delete_competence(competence: any) {
    return this.http.post(myConst.url.concat("/delete_competence"), competence);
  }

  update_competence(competenceOffre: any) {
    return this.http.put(
      myConst.url.concat("/update_competence"),
      competenceOffre
    );
  }

  list_competence(offreEmplois: any) {
    return this.http.post(myConst.url.concat("/list_competence"), offreEmplois);
  }
}
