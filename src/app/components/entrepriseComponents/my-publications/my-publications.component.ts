import { Component, OnInit } from "@angular/core";
import { CompetenceOffre } from "../../../models/entreprise/competenceOffre";
import { MissionsOffre } from "../../../models/entreprise/missionsOffre";
import { OffreEmplois } from "../../../models/entreprise/offreEmplois";
import { OffersService } from "../../../services/entrepriseServices/offers/offers.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-my-publications",
  templateUrl: "./my-publications.component.html",
  styleUrls: ["./my-publications.component.css"],
})
export class MyPublicationsComponent implements OnInit {
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
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.competenceOffre = new CompetenceOffre();
    this.missionsOffre = new MissionsOffre();
    this.offreEmplois = new OffreEmplois();

    this.list_my_offre();
  }

  list_my_offre() {
    let entrepriseAccount = {
      oid: atob(localStorage.getItem("entreprise_oid")),
    };
    this.offersService.list_my_offre(entrepriseAccount).subscribe({
      next: (response) => {
        this.offreEmploisList = response as Array<OffreEmplois>;
        console.log(this.offreEmploisList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  supprimer_offre(index) {
    if (confirm("voullez vous vraiment effectuer cette suppression?")) {
      this.offreEmplois = index;
      this.offersService.supprimer_offre(this.offreEmplois).subscribe({
        next: (response) => {
          alert(response["message"]);
          this.list_my_offre();
        },
        error: (err) => {
          console.log(err.error);
        },
      });
    } else {
      return;
    }
  }
}
