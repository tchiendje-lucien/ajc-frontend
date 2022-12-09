import { MissionsOffre } from "./../../../models/entreprise/missionsOffre";
import { CompetenceOffre } from "./../../../models/entreprise/competenceOffre";
import { Component, OnInit } from "@angular/core";
import { OffreEmplois } from "../../../models/entreprise/offreEmplois";
import { OffersService } from "../../../services/entrepriseServices/offers/offers.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { myConst } from "../../../models/entreprise/settings";

@Component({
  selector: "app-list-offer",
  templateUrl: "./list-offer.component.html",
  styleUrls: ["./list-offer.component.css"],
})
export class ListOfferComponent implements OnInit {
  competenceOffre: CompetenceOffre;
  missionsOffre: MissionsOffre;
  offreEmplois: OffreEmplois;

  //Array Model
  competenceOffreList: CompetenceOffre[];
  missionsOffreList: MissionsOffre[];
  offreEmploisList: OffreEmplois[];

  //Another proprieties
  offreFile: File;
  testImage

  constructor(
    public offersService: OffersService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.competenceOffre = new CompetenceOffre();
    this.missionsOffre = new MissionsOffre();
    this.offreEmplois = new OffreEmplois();

    this.list_offre();
  }

  list_offre() {
    this.offersService.list_offre().subscribe({
      next: (response) => {
        this.offreEmploisList = response as Array<OffreEmplois>;
        console.log(this.offreEmploisList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  imageOffre(oid_offre) {
    this.offersService.imageOffre(oid_offre).subscribe({
      next: (response) => {
        this.offreFile = response as File;
        console.log(this.offreFile);
        return response;
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  getImageOffre(filename) {
    console.log(filename);
    this.offersService.getImageOffre(filename).subscribe((res) => {
      this.testImage = URL.createObjectURL(res);
      console.log(this.testImage)
      //window.open(fileURL, "_blank");
    });
  }

  defaultOffreImage() {
    return "assets/img/téléchargement (1).jpg";
  }
}
