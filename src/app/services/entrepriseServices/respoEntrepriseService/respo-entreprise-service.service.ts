import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myConst } from '../../../models/entreprise/settings';

@Injectable({
  providedIn: 'root'
})
export class RespoEntrepriseServiceService {

  constructor(private http: HttpClient) { }

  update_respo_entreprise(respoEntreprise: any) {
    return this.http.put(
      myConst.url.concat("/update_respo_entreprise"),
      respoEntreprise
    );
  }

  create_respo_entreprise(respoEntreprise: any) {
    return this.http.post(
      myConst.url.concat("/create_respo_entreprise"),
      respoEntreprise
    );
  }

  delete_respo_entreprise(respoEntreprise: any) {
    return this.http.post(
      myConst.url.concat("/delete_respo_entreprise"),
      respoEntreprise
    );
  }

  list_respoEntreprise(entrepriseAccount: any) {
    return this.http.post(
      myConst.url.concat("/list_respoEntreprise"),
      entrepriseAccount
    );
  }
}
