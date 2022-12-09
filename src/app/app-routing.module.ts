import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { PositioningPersonsComponent } from "./components/servicesComponents/positioning-persons/positioning-persons.component";
import { ManagementRhComponent } from "./components/servicesComponents/management-rh/management-rh.component";
import { AuditRhComponent } from "./components/servicesComponents/audit-rh/audit-rh.component";
import { FiscalityAdministrativeComponent } from "./components/servicesComponents/fiscality-administrative/fiscality-administrative.component";
import { TrainingComponent } from "./components/servicesComponents/training/training.component";
import { MaintenanceComponent } from "./components/errorsComponents/maintenance/maintenance.component";
import { RegisterComponent } from "./components/entrepriseComponents/register/register.component";
import { AuthService } from "./services/guards/auth/auth.service";
import { LoginComponent } from "./components/candidat/login/login.component";
import { ForgotPasswordComponent } from "./components/entrepriseComponents/forgot-password/forgot-password.component";
import { CreateOffreComponent } from "./components/entrepriseComponents/create-offre/create-offre.component";
import { FindProfilesComponent } from "./components/candidat/find-profiles/find-profiles.component";
import { ForbiddenErrorsComponent } from "./components/errorsComponents/forbidden-errors/forbidden-errors.component";
import { NotFondErrorsComponent } from "./components/errorsComponents/not-fond-errors/not-fond-errors.component";
import { ProfileDetailComponent } from './components/candidat/profile-detail/profile-detail.component';
import { ListOfferComponent } from './components/entrepriseComponents/list-offer/list-offer.component';
import { DetailOfferComponent } from './components/entrepriseComponents/detail-offer/detail-offer.component';
import { MyPublicationsComponent } from './components/entrepriseComponents/my-publications/my-publications.component';
import { OurMissionsComponent } from './components/our-missions/our-missions.component';
import { OurPoliticComponent } from './components/our-politic/our-politic.component';
import { OurVisionsComponent } from './components/our-visions/our-visions.component';
import { OurValuesComponent } from './components/our-values/our-values.component';
import { UpdateMyPublicationsComponent } from './components/entrepriseComponents/update-my-publications/update-my-publications.component';
import { AskProfileComponent } from './components/entrepriseComponents/ask-profile/ask-profile.component';
import { MesProfilsComponent } from './components/entrepriseComponents/mes-profils/mes-profils.component';
import { UpdateAskProfileComponent } from './components/entrepriseComponents/update-ask-profile/update-ask-profile.component';
import { SetcvComponent } from './components/candidat/setcv/setcv.component';
import { LoginEntrepriseComponent } from './components/entrepriseComponents/login-entreprise/login-entreprise.component';

const appRoutes: Routes = [
  // {
  //   path: "",
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: "setting",
  //       component: SettingsComponent,
  //       outlet: "settingOutlet",
  //     },
  //   ],
  // },

  //Routes de la partie statique
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "qui-sommes-nous",
    component: AboutUsComponent,
  },
  {
    path: "nous-contacter",
    component: ContactUsComponent,
  },
  {
    path: "nos-services/placement-du-personnel",
    component: PositioningPersonsComponent,
  },
  {
    path: "nos-services/management-des-rh",
    component: ManagementRhComponent,
  },
  {
    path: "nos-services/audit-des-rh",
    component: AuditRhComponent,
  },
  {
    path: "nos-services/fiscalite-administrative",
    component: FiscalityAdministrativeComponent,
  },
  {
    path: "nos-services/fomration",
    component: TrainingComponent,
  },
  {
    path: "qui-sommes-nous/nos-missions",
    component: OurMissionsComponent,
  },
  {
    path: "qui-sommes-nous/notre-vision",
    component: OurVisionsComponent,
  },
  {
    path: "qui-sommes-nous/notre-politique",
    component: OurPoliticComponent,
  },
  {
    path: "qui-sommes-nous/nos-valeurs",
    component: OurValuesComponent,
  },

  //Errors routes

  {
    path: "errors/setting",
    component: MaintenanceComponent,
  },

  {
    path: "errors/forbidden",
    component: ForbiddenErrorsComponent,
  },

  {
    path: "errors/not-fond",
    component: NotFondErrorsComponent,
  },

  //Routes de la partie entrepries
  {
    path: "entreprise/register",
    component: RegisterComponent,
  },
  {
    path: "candidate/find-profile",
    canActivate: [AuthService],
    component: FindProfilesComponent,
  },
  {
    path: "entreprise/login",
    component: LoginEntrepriseComponent,
  },
  {
    path: "entreprise/forgot-password",
    component: ForgotPasswordComponent,
  },
  {
    path: "entreprise/create-offer",
    canActivate: [AuthService],
    component: CreateOffreComponent,
  },
  {
    path: "candidate/profile-detail",
    canActivate: [AuthService],
    component: ProfileDetailComponent,
  },
  {
    path: "entreprise/list-offers",
    canActivate: [AuthService],
    component: ListOfferComponent,
  },
  {
    path: "entreprise/detail-offers/:offre_oid",
    canActivate: [AuthService],
    component: DetailOfferComponent,
  },
  {
    path: "entreprise/my-publications",
    canActivate: [AuthService],
    component: MyPublicationsComponent,
  },
  {
    path: "entreprise/edit-offers/:offre_oid",
    canActivate: [AuthService],
    component: UpdateMyPublicationsComponent,
  },
  {
    path: "entreprise/ask-profile",
    canActivate: [AuthService],
    component: AskProfileComponent,
  },
  {
    path: "entreprise/my-profile",
    canActivate: [AuthService],
    component: MesProfilsComponent,
  },
  {
    path: "entreprise/edit-ask-profile/:askProfile_oid",
    canActivate: [AuthService],
    component: UpdateAskProfileComponent,},
    {
    path: "candidat/login",
    component: LoginComponent,
  },
   {
    path: "candidat/registrecanditate",
    component: RegisterComponent,
  },
   {
    path: "candidat/setcv",
    component: SetcvComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//export const appRoutingModule = RouterModule.forRoot(routes);
//export const RoutingComponent = [SettingsComponent,LoginComponent];
