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
} from "../../../models/entreprise/settings";
import { RespoEntreprise } from "../../../models/entreprise/representants";
import { EntrepriseAccount } from "../../../models/entreprise/entreprise";
import { EntrepriseService } from "../../../services/entrepriseServices/entreprise/entreprise.service";
import { ErrorClass, SuccessClass } from "../../../models/entreprise/settings";
import { Router } from '@angular/router';
import {
  CustomValidator,
  ConfirmPasswordValidator,
} from "../../../services/entrepriseServices/validatorInputs";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  //Model
  pays: Pays;
  activitySectors: ActivitySectors;
  respoEntreprise: RespoEntreprise;
  entrepriseAccount: EntrepriseAccount;
  errorClass: ErrorClass;
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
  cars = [
    { id: 1, name: "Volvo" },
    { id: 2, name: "Saab" },
    { id: 3, name: "Opel" },
    { id: 4, name: "Audi" },
  ];

  constructor(
    private formbulder: FormBuilder,
    private settings: SettingsService,
    private entrepriseServices: EntrepriseService,
    private router: Router
  ) {
    this.registerForm = this.formbulder.group(
      {
        oid: new FormControl(-1, Validators.required),
        entrepriseId: new FormControl("", Validators.required),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
        ]),
        re_password: new FormControl("", [
          Validators.required,
          Validators.minLength(8),
        ]),
        name: new FormControl("", Validators.required),
        social_reason: new FormControl("", Validators.required),
        activitySectors: new FormControl("undefined", Validators.required),
        adress: new FormControl(),
        logo: new FormControl(),
        another_activitySector: new FormControl(),
        ville: new FormControl("", Validators.required),
        pays: new FormControl("undefined", Validators.required),
        username: new FormControl("", Validators.required),
        surname: new FormControl("", Validators.required),
        civility: new FormControl("undefined", Validators.required),
        email: new FormControl("", [Validators.required, Validators.email]),
        numPortable: new FormControl(),
        numFixe: new FormControl("", Validators.required),
        function: new FormControl("", Validators.required),
      },
      {
        validators: this.password.bind(this),
      }
      // { updateOn: "submit" },
    );
  }

  ngOnInit() {
    this.pays = new Pays();
    this.activitySectors = new ActivitySectors();
    this.respoEntreprise = new RespoEntreprise();
    this.entrepriseAccount = new EntrepriseAccount();
    this.errorClass = new ErrorClass();
    this.successClass = new SuccessClass();

    this.getCountriesListInAlphabetical();
    this.list_ActivitySector();
  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get("password");
    const { value: confirmPassword } = formGroup.get("re_password");
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  get f() {
    return this.registerForm.controls;
  }

  get entrepriseId_register() {
    return this.registerForm.get("entrepriseId");
  }
  get password_register() {
    return this.registerForm.get("password");
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
  get username_register() {
    return this.registerForm.get("username");
  }
  get surname_register() {
    return this.registerForm.get("surname");
  }
  get civility_register() {
    return this.registerForm.get("civility");
  }
  get email_register() {
    return this.registerForm.get("email");
  }
  get numFixe_register() {
    return this.registerForm.get("numFixe");
  }
  get function_register() {
    return this.registerForm.get("function");
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

  save_entreprise() {
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

      let user = {
        identifiant: this.registerForm.get("entrepriseId").value,
        role: "Entrepise",
        password: this.registerForm.get("password").value,
        re_password: null,
      };

      let objetrespo = [];
      this.respoTab.forEach(function (item) {
        //console.log(item)
        objetrespo.push({
          name: item.username,
          surname: item.surname,
          email: item.email,
          function: item.function,
          numFixe: item.numFixe,
          numPortable: item.numPortable,
          civility: item.civility,
          entrepriseAccount: null,
        });
      });

      console.log(objetrespo);

      if (
        this.logoFileSlected == null ||
        this.logoFileSlected.name == "" ||
        this.logoFileSlected == undefined
      ) {
        registerFormData.append(
          "entrepriseAccount",
          JSON.stringify(entrepriseForm)
        );
        registerFormData.append("respoEntreprises", JSON.stringify(objetrespo));
        registerFormData.append("users", JSON.stringify(user));

        this.entrepriseServices
          .create_entreprise_withoutLogo(registerFormData)
          .subscribe({
            next: (response) => {
              this.router.navigate(["entreprise/login"]);
              // this.errorClass.message = response["message"];
              // this.errorClass.status = response["status"];
              // alert(response["message"]);
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
        registerFormData.append("respoEntreprises", JSON.stringify(objetrespo));
        registerFormData.append("users", JSON.stringify(user));
        registerFormData.append(
          "logo",
          this.logoFileSlected,
          this.logoFileSlected.name
        );

        this.entrepriseServices.create_entreprise(registerFormData).subscribe({
          next: (response) => {
            alert(response["message"]);
          },
          error: (err) => {
            console.log(err.error);
          },
        });
      }
    } else {
      alert("Veillez remplir tous les champs obligatoire");
    }
  }
}
