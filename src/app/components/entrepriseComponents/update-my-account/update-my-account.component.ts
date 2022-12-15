import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { SettingsService } from "../../../services/entrepriseServices/settings/settings.service";
import {
  Pays,
  ActivitySectors,
  ResponseClass,
} from "../../../models/entreprise/settings";
import { RespoEntreprise } from "../../../models/entreprise/representants";
import { EntrepriseAccount } from "../../../models/entreprise/entreprise";
import { EntrepriseService } from "../../../services/entrepriseServices/entreprise/entreprise.service";
import { ErrorClass, SuccessClass } from "../../../models/entreprise/settings";
import { Router } from "@angular/router";
import { Users } from "../../../models/entreprise/users";
import * as $ from "jquery";
import { UsersService } from "../../../services/userServices/users.service";
import { RespoEntrepriseServiceService } from "../../../services/entrepriseServices/respoEntrepriseService/respo-entreprise-service.service";

@Component({
  selector: "app-update-my-account",
  templateUrl: "./update-my-account.component.html",
  styleUrls: ["./update-my-account.component.css"],
})
export class UpdateMyAccountComponent implements OnInit {
  //Model
  pays: Pays;
  activitySectors: ActivitySectors;
  respoEntreprise: RespoEntreprise;
  entrepriseAccount: EntrepriseAccount;
  errorClass: ErrorClass;
  responseClass: ResponseClass;
  users: Users;
  successClass;
  SuccessClass;

  //Model arrays
  paysList: Pays[];
  activitySectorsList: ActivitySectors[];
  respoEntrepriseList: RespoEntreprise[];
  entrepriseAccountList: EntrepriseAccount[];

  //Other proprieties
  selectedCar: number;
  logoFileSlected: File;
  file_statut: boolean = true;
  btn_respo_state: boolean = true;
  registerForm: FormGroup;
  respoEntrepriseForm: FormGroup;
  updtUsernameForm: FormGroup;
  updtPwdForm: FormGroup;
  test = false;
  respoTab = [
    {
      username: null,
      surname: "",
      email: null,
      function: null,
      numFixe: null,
      numPortable: null,
      civility: "undefined",
    },
  ];
  updtIdentifiantResponse = {
    message: null,
    status: null,
  };
  updtIRespoResponse = {
    message: null,
    status: null,
  };

  constructor(
    private formbulder: FormBuilder,
    private settings: SettingsService,
    private entrepriseServices: EntrepriseService,
    private usersServices: UsersService,
    private router: Router,
    private respoEntrepriseServiceServicese: RespoEntrepriseServiceService
  ) {
    this.registerForm = this.formbulder.group(
      {
        oid: new FormControl(-1, Validators.required),
        // entrepriseId: new FormControl("", Validators.required),
        // re_password: new FormControl(),
        name: new FormControl("", Validators.required),
        social_reason: new FormControl("", Validators.required),
        activitySectors: new FormControl("undefined", Validators.required),
        adress: new FormControl(),
        logo: new FormControl(),
        another_activitySector: new FormControl(),
        ville: new FormControl("", Validators.required),
        pays: new FormControl("undefined", Validators.required),
      }
      // {
      //   validators: this.password.bind(this),
      // }
      // { updateOn: "submit" },
    );

    this.respoEntrepriseForm = this.formbulder.group({
      surname: new FormControl("", Validators.required),
      civility: new FormControl("undefined", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      numPortable: new FormControl(),
      numFixe: new FormControl("", Validators.required),
      function: new FormControl("", Validators.required),
    });

    this.updtUsernameForm = this.formbulder.group({
      oid: new FormControl(-1, Validators.required),
      entrepriseId: new FormControl("", Validators.required),
    });

    this.updtPwdForm = this.formbulder.group({
      oid: new FormControl(-1, Validators.required),
      old_password: new FormControl("", Validators.required),
      new_password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.respoEntrepriseForm = this.formbulder.group({
      oid: new FormControl(-1, Validators.required),
      username: new FormControl("", Validators.required),
      surname: new FormControl("", Validators.required),
      civility: new FormControl("undefined", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      numPortable: new FormControl(),
      numFixe: new FormControl("", Validators.required),
      function: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
    this.pays = new Pays();
    this.activitySectors = new ActivitySectors();
    this.respoEntreprise = new RespoEntreprise();
    this.entrepriseAccount = new EntrepriseAccount();
    this.errorClass = new ErrorClass();
    this.successClass = new SuccessClass();
    this.users = new Users();
    this.responseClass = new ResponseClass();

    this.getCountriesListInAlphabetical();
    this.list_ActivitySector();
    this.find_user();
  }
  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get("password");
  //   const { value: confirmPassword } = formGroup.get("re_password");
  //   return password === confirmPassword ? null : { passwordNotMatch: true };
  // }

  get f() {
    return this.registerForm.controls;
  }

  get entrepriseId_register() {
    return this.updtUsernameForm.get("entrepriseId");
  }
  get old_password_register() {
    return this.updtPwdForm.get("old_password");
  }
  get new_password_register() {
    return this.updtPwdForm.get("new_password");
  }
  get re_password_register() {
    return this.registerForm.get("re_password");
  }
  get name_register() {
    return this.registerForm.get("name");
  }
  get social_reason_register() {
    return this.registerForm.get("social_reason");
  }
  get activitySectors_register() {
    return this.registerForm.get("activitySectors");
  }
  get villes_register() {
    return this.registerForm.get("ville");
  }
  get pays_register() {
    return this.registerForm.get("pays");
  }

  //Respo entreprise
  get username_register() {
    return this.respoEntrepriseForm.get("username");
  }
  get surname_register() {
    return this.respoEntrepriseForm.get("surname");
  }
  get civility_register() {
    return this.respoEntrepriseForm.get("civility");
  }
  get email_register() {
    return this.respoEntrepriseForm.get("email");
  }
  get numFixe_register() {
    return this.respoEntrepriseForm.get("numFixe");
  }
  get function_register() {
    return this.respoEntrepriseForm.get("function");
  }

  addRespo() {
    this.respoTab.push({
      username: null,
      surname: "",
      email: null,
      function: null,
      numFixe: null,
      numPortable: null,
      civility: "undefined",
    });
    // this.respoTab.push({
    //   username: null,
    //   surname: "",
    //   email: null,
    //   function: null,
    //   numFixe: null,
    //   numPortable: null,
    //   civility: null,
    // });

    console.log("New row added");
  }

  deleteRespoRow(index) {
    this.respoTab.splice(index, 1);
  }

  getValues() {
    console.log(this.respoTab);
  }

  list_ActivitySector() {
    this.settings.list_ActivitySector().subscribe({
      next: (response) => {
        this.activitySectorsList = response as Array<ActivitySectors>;
        // console.log(this.activitySectorsList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  getCountriesListInAlphabetical() {
    this.settings.getCountriesListInAlphabetical().subscribe({
      next: (response) => {
        this.paysList = response as Array<Pays>;
        //console.log(this.paysList);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }

  onFileChangedLogo(event) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      console.log(file);
      if (file.type == "image/jpeg") {
        this.logoFileSlected = event.target.files[0];
        console.log("correct");
        this.file_statut = true;
      } else {
        this.file_statut = false;
        //call validation
        this.registerForm.get("logo").reset();
        this.registerForm.controls["logo"].setValidators([Validators.required]);
        this.registerForm.get("logo").updateValueAndValidity();
      }
    }
  }

  update_entreprise() {
    // alert("good");
    // if(this.registerForm.valid)
    // {
    //   alert("goog")
    // }else{
    //   alert("no good")
    // }
    if (this.registerForm.valid) {
      let registerFormData = new FormData();
      let entrepriseForm = {
        oid: this.registerForm.get("oid").value,
        name: this.registerForm.get("name").value,
        social_reason: this.registerForm.get("social_reason").value,
        another_activitySector: this.registerForm.get("another_activitySector")
          .value,
        adress: this.registerForm.get("adress").value,
        pays: this.registerForm.get("pays").value,
        ville: this.registerForm.get("ville").value,
        logo: null,
        created_at: null,
        updated_at: null,
        activitySectors: {
          oid: this.registerForm.get("activitySectors").value,
        },
      };

      if (
        this.logoFileSlected == null ||
        this.logoFileSlected.name == "" ||
        this.logoFileSlected == undefined
      ) {
        registerFormData.append(
          "entrepriseAccount",
          JSON.stringify(entrepriseForm)
        );

        this.entrepriseServices
          .update_entreprise_withoutLogo(registerFormData)
          .subscribe({
            next: (response) => {
              // this.router.navigate(["entreprise/login"]);
              this.responseClass.message = response["message"];
              this.responseClass.status = response["status"];
              // alert(response["message"]);
              $(".success-div").show();
              setTimeout(function () {
                $(".success-div").hide();
              }, 5000);
              // alert(response["status"]);
            },
            error: (err) => {
              console.log(err.error);
            },
          });
      } else {
        registerFormData.append(
          "entrepriseAccount",
          JSON.stringify(entrepriseForm)
        );
        registerFormData.append(
          "logo",
          this.logoFileSlected,
          this.logoFileSlected.name
        );

        this.entrepriseServices.update_entreprise(registerFormData).subscribe({
          next: (response) => {
            // this.router.navigate(["entreprise/login"]);
            this.responseClass.message = response["message"];
            this.responseClass.status = response["status"];
            this.registerForm.get("logo").reset();
            // alert(response["message"]);
            $(".success-div").show();
            setTimeout(function () {
              $(".success-div").hide();
            }, 5000);
            // alert(response["status"]);
          },
          error: (err) => {
            console.log(err.error);
          },
        });
      }
    } else {
      return;
      // this.responseClass.message =
      //   "Veillez remplir tous les champs obligatoire";
      // this.responseClass.status = false;
      // // alert(response["message"]);
      // $(".success-div").show();
      // setTimeout(function () {
      //   $(".success-div").hide();
      // }, 5000);
      // alert("Veillez remplir tous les champs obligatoire");
    }
  }

  find_user() {
    this.entrepriseServices.find_user().subscribe({
      next: (response) => {
        this.users = response as Users;
        this.respoEntrepriseList = response["entrepriseAccount"][
          "respoEntreprises"
        ] as Array<RespoEntreprise>;

        this.updtUsernameForm.patchValue({
          oid: this.users.oid,
          entrepriseId: this.users.identifiant,
        });

        this.updtPwdForm.patchValue({
          oid: this.users.oid,
        });

        this.registerForm.patchValue({
          oid: this.users.entrepriseAccount.oid,
          name: this.users.entrepriseAccount.name,
          social_reason: this.users.entrepriseAccount.social_reason,
          activitySectors: this.users.entrepriseAccount.activitySectors.oid,
          adress: this.users.entrepriseAccount.adress,
          // logo: new FormControl(),
          another_activitySector:
            this.users.entrepriseAccount.another_activitySector,
          ville: this.users.entrepriseAccount.ville,
          pays: this.users.entrepriseAccount.pays,
        });
      },
      error: (err1) => {
        console.log(err1.error);
      },
    });
  }

  update_username() {
    if (this.updtUsernameForm.valid) {
      let users = {
        oid: this.updtUsernameForm.get("oid").value,
        identifiant: this.updtUsernameForm.get("entrepriseId").value,
      };
      // console.log(this.updtUsernameForm.value);
      this.usersServices.update_username(users).subscribe({
        next: (response) => {
          this.updtIdentifiantResponse.message = response["message"];
          this.updtIdentifiantResponse.status = response["status"];
          if (this.updtIdentifiantResponse.status == false) {
            $(".identifiant-div").show();
            setTimeout(function () {
              $(".identifiant-div").hide();
            }, 5000);
          } else {
            // $(".identifiant-div").show();
            // setTimeout(function () {
            //   $(".identifiant-div").hide();
            // }, 5000);
            alert(response["message"]);
            this.usersServices.logout();
          }
        },
        error: (err) => {
          console.log(err.error);
        },
      });
    } else {
      return;
    }
  }

  update_password() {
    if (this.updtPwdForm.valid) {
      let users = {
        oid: this.updtPwdForm.get("oid").value,
        password: this.updtPwdForm.get("old_password").value,
        re_password: this.updtPwdForm.get("new_password").value,
      };
      this.usersServices.change_password(users).subscribe({
        next: (response) => {
          this.updtIdentifiantResponse.message = response["message"];
          this.updtIdentifiantResponse.status = response["status"];
          if (this.updtIdentifiantResponse.status == false) {
            $(".identifiant-div").show();
            setTimeout(function () {
              $(".identifiant-div").hide();
            }, 5000);
          } else {
            $(".identifiant-div").show();
            setTimeout(function () {
              $(".identifiant-div").hide();
            }, 5000);
          }
        },
        error: (err) => {
          console.log(err.error);
        },
      });
    } else {
      return;
    }
  }

  save_respoEntreprise(index) {
    if (this.respoEntrepriseForm.valid) {
      let respoEntreprise = {
        oid: this.respoEntrepriseForm.get("oid").value,
        name: this.respoEntrepriseForm.get("username").value,
        surname: this.respoEntrepriseForm.get("surname").value,
        civility: this.respoEntrepriseForm.get("civility").value,
        email: this.respoEntrepriseForm.get("email").value,
        numPortable: this.respoEntrepriseForm.get("numPortable").value,
        numFixe: this.respoEntrepriseForm.get("numFixe").value,
        function: this.respoEntrepriseForm.get("function").value,
      };

      this.respoEntrepriseServiceServicese
        .update_respo_entreprise(respoEntreprise)
        .subscribe({
          next: (response) => {
            this.updtIRespoResponse.message = response["message"];
            this.updtIRespoResponse.status = response["status"];
            $(".respo-div").show();
            setTimeout(function () {
              $(".respo-div").hide();
            }, 5000);
            // alert(response["message"]);
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
