import { Injectable } from "@angular/core";
import { myConst } from "../../../models/entreprise/settings";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class OffersService {
  public host = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  create_offre(offreEmploi: any) {
    return this.http.post(myConst.url.concat("/create_offre"), offreEmploi);
  }

  create_withoutImage(offreEmploi: any) {
    return this.http.post(
      myConst.url.concat("/create_withoutImage"),
      offreEmploi
    );
  }

  update_offre(offreEmploi: any) {
    return this.http.put(myConst.url.concat("/update_offre"), offreEmploi);
  }

  update_withoutImage(offreEmploi: any) {
    return this.http.put(
      myConst.url.concat("/update_withoutImage"),
      offreEmploi
    );
  }

  find_offre(oid_offre) {
    return this.http.get(myConst.url.concat("/find_offre/" + oid_offre));
  }

  list_offre() {
    return this.http.get(myConst.url.concat("/list_offre"));
  }

  imageOffre(oid_offre) {
    return this.http.get(myConst.url.concat("/imageOffre/" + oid_offre));
  }

  getImageOffre(filename: string): any {
    return this.http
      .post(myConst.url.concat("/getImageOffre"), filename, {
        responseType: "blob",
        observe: "response",
      })
      .pipe(
        map((res: any) => {
          return new Blob([res.body], { type: "image/jpeg" });
        })
      );
  }

  defaultOffreImage() {
    return "assets/img/téléchargement (1).jpg";
  }

  list_similary_offre(paremSimilaryOffer) {
    return this.http.post(
      myConst.url.concat("/list_similary_offre"),
      paremSimilaryOffer
    );
  }

  list_my_offre(entreprise) {
    return this.http.post(myConst.url.concat("/list_my_offre"), entreprise);
  }

  supprimer_offre(offreEmploi: any) {
    return this.http.put(myConst.url.concat("/supprimer_offre"), offreEmploi);
  }
}
