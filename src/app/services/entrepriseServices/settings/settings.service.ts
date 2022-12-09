import { HttpBackend, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { myConst } from "../../../models/entreprise/settings";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  private customHttpClient: HttpClient;

  constructor(private http: HttpClient, backend: HttpBackend) {
    this.customHttpClient = new HttpClient(backend);
  }

  create_ActivitySector(activitySector: any) {
    return this.http.post(
      myConst.url.concat("/create_ActivitySector"),
      activitySector
    );
  }

  update_ActivitySector(activitySector: any) {
    return this.http.put(
      myConst.url.concat("/update_ActivitySector"),
      activitySector
    );
  }

  list_ActivitySector() {
    return this.customHttpClient.get(
      myConst.url.concat("/list_ActivitySector")
    );
  }

  getCountriesListInAlphabetical() {
    return this.customHttpClient.get(myConst.url.concat("/getCountriesListInAlphabetical"));
  }
}
