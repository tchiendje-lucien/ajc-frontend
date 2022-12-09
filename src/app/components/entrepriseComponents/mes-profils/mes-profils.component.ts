import { Component, OnInit } from "@angular/core";
import { DemandeProfil } from "../../../models/entreprise/demandeProfil";
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';
import { AskProfileService } from '../../../services/entrepriseServices/askProfile/ask-profile.service';

@Component({
  selector: "app-mes-profils",
  templateUrl: "./mes-profils.component.html",
  styleUrls: ["./mes-profils.component.css"],
})
export class MesProfilsComponent implements OnInit {
  demandeProfil: DemandeProfil;
  demandeProfilList: DemandeProfil[];
  datePipe = new DatePipe("en-US");
  todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");

  constructor(
    private askProfileService: AskProfileService,
    private route: Router
  ) {}

  ngOnInit() {
    this.demandeProfil = new DemandeProfil();
    this.list_ask_profile();
  }

  list_ask_profile() {
    let entrepriseAccount = {
      oid: atob(localStorage.getItem("entreprise_oid")),
    };
    this.askProfileService.list_ask_profile(entrepriseAccount).subscribe({
      next: (response) => {
        this.demandeProfilList = response as Array<DemandeProfil>;
        console.log(this.demandeProfilList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }
}
