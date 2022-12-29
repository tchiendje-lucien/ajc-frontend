import { Component, OnInit } from "@angular/core";
import { DemandeProfil } from "../../../models/entreprise/demandeProfil";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { AskProfileService } from "../../../services/entrepriseServices/askProfile/ask-profile.service";
import { ChopperCandidatService } from "../../../services/entrepriseServices/chopperCandidat/chopper-candidat.service";
import { SettingsService } from "../../../services/settings/settings.service";
import { ToastrService } from "ngx-toastr";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-mes-profils",
  templateUrl: "./mes-profils.component.html",
  styleUrls: ["./mes-profils.component.css"],
})
export class MesProfilsComponent implements OnInit {
  demandeProfil: DemandeProfil;
  demandeProfilList: DemandeProfil[];
  demandeProfilListLength: number = 0;
  datePipe = new DatePipe("en-US");
  todayDate = this.datePipe.transform(new Date(), "yyyy-MM-dd");
  chopperList: any;
  chopperLength: number = 0;
  p_myProfils: number = 1;
  p_myAskProfils: number = 1;

  constructor(
    private askProfileService: AskProfileService,
    private route: Router,
    private chopperCandidatService: ChopperCandidatService,
    public settingsService: SettingsService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.demandeProfil = new DemandeProfil();
    this.list_ask_profile();
    this.list_chopper();
  }

  list_ask_profile() {
    this.spinner.show();
    let entrepriseAccount = {
      oid: atob(localStorage.getItem("entreprise_oid")),
    };
    this.askProfileService.list_ask_profile(entrepriseAccount).subscribe({
      next: (response) => {
        this.spinner.hide();
        this.demandeProfilList = response as Array<DemandeProfil>;
        this.demandeProfilListLength = this.demandeProfilList.length;
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  list_chopper() {
    let entrepriseAccount = {
      oid: atob(localStorage.getItem("entreprise_oid")),
    };
    this.chopperCandidatService.list_chopper(entrepriseAccount).subscribe({
      next: (response) => {
        this.chopperList = response;
        this.chopperLength = this.chopperList.length
        // console.log(this.chopperList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  cancel_chopper(index) {
    let chopper = index;

    if (confirm("Voulez vous vraiment supprimer/annuler cette demande?")) {
      this.chopperCandidatService.cancel_chopper(chopper).subscribe({
        next: (response) => {
          this.toastr.success(response["message"], "Success");
          this.list_chopper();
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
