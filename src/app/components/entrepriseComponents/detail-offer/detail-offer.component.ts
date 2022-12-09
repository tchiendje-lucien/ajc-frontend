import { Component, OnInit } from "@angular/core";
import { CompetenceOffre } from "../../../models/entreprise/competenceOffre";
import { MissionsOffre } from "../../../models/entreprise/missionsOffre";
import { OffreEmplois } from "../../../models/entreprise/offreEmplois";
import { OffersService } from "../../../services/entrepriseServices/offers/offers.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-detail-offer",
  templateUrl: "./detail-offer.component.html",
  styleUrls: ["./detail-offer.component.css"],
})
export class DetailOfferComponent implements OnInit {
  competenceOffre: CompetenceOffre;
  missionsOffre: MissionsOffre;
  offreEmplois: OffreEmplois;

  //Array Model
  competenceOffreList: CompetenceOffre[];
  missionsOffreList: MissionsOffre[];
  offreEmploisList: OffreEmplois[];

  //Another proprieties
  offre_oid = this.router.snapshot.paramMap.get("offre_oid");

  constructor(
    public offersService: OffersService,
    private route: Router,
    private router: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.competenceOffre = new CompetenceOffre();
    this.missionsOffre = new MissionsOffre();
    this.offreEmplois = new OffreEmplois();

    this.find_offre();
    // this.list_similary_offre();
  }

  find_offre() {
    this.offersService.find_offre(this.offre_oid).subscribe({
      next: (response) => {
        this.offreEmplois = response as OffreEmplois;
        console.log(this.offreEmplois);
        this.list_similary_offre();
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  list_similary_offre() {
    let paremSimilaryOffer = {
      activitySectors: this.offreEmplois.activitySectors,
      pays: this.offreEmplois.pays,
    };
    console.log(paremSimilaryOffer);
    this.offersService.list_similary_offre(paremSimilaryOffer).subscribe({
      next: (response) => {
        this.offreEmploisList = response as Array<OffreEmplois>;
        console.log(this.offreEmploisList);
        console.log(this.route.url);
        // this.location.replaceState("/entreprise/detail-offers/1");
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  view_similary_offer(index) {
    this.offreEmplois = index;
    console.log(this.offreEmplois)
    this.location.replaceState("/entreprise/detail-offers/" + this.offreEmplois.oid);
  }
}
