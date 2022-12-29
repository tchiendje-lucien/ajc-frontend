import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { PositioningPersonsComponent } from "./components/servicesComponents/positioning-persons/positioning-persons.component";
import { ManagementRhComponent } from "./components/servicesComponents/management-rh/management-rh.component";
import { AuditRhComponent } from "./components/servicesComponents/audit-rh/audit-rh.component";
import { FiscalityAdministrativeComponent } from "./components/servicesComponents/fiscality-administrative/fiscality-administrative.component";
import { TrainingComponent } from "./components/servicesComponents/training/training.component";
import { ContactUsFormComponent } from "./components/subComponents/contact-us-form/contact-us-form.component";
import { MaintenanceComponent } from "./components/errorsComponents/maintenance/maintenance.component";
import { RegisterComponent } from "./components/entrepriseComponents/register/register.component";
import { SearchProfileComponent } from "./components/entrepriseComponents/search-profile/search-profile.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { ForgotPasswordComponent } from "./components/entrepriseComponents/forgot-password/forgot-password.component";
import { CreateOffreComponent } from "./components/entrepriseComponents/create-offre/create-offre.component";
import { FindProfilesComponent } from "./components/candidat/find-profiles/find-profiles.component";
import { HttpInterceptorServiceService } from "./services/entrepriseServices/HttpInterceptorService/http-interceptor-service.service";
import { ForbiddenErrorsComponent } from "./components/errorsComponents/forbidden-errors/forbidden-errors.component";
import { NotFondErrorsComponent } from "./components/errorsComponents/not-fond-errors/not-fond-errors.component";
import { ProfileDetailComponent } from "./components/candidat/profile-detail/profile-detail.component";
import { ListOfferComponent } from "./components/entrepriseComponents/list-offer/list-offer.component";
import { DetailOfferComponent } from "./components/entrepriseComponents/detail-offer/detail-offer.component";
import { MyPublicationsComponent } from "./components/entrepriseComponents/my-publications/my-publications.component";
import { OurMissionsComponent } from "./components/our-missions/our-missions.component";
import { OurPoliticComponent } from "./components/our-politic/our-politic.component";
import { OurVisionsComponent } from "./components/our-visions/our-visions.component";
import { OurValuesComponent } from "./components/our-values/our-values.component";
import { UpdateMyPublicationsComponent } from "./components/entrepriseComponents/update-my-publications/update-my-publications.component";
import { AskProfileComponent } from "./components/entrepriseComponents/ask-profile/ask-profile.component";
import { MesProfilsComponent } from "./components/entrepriseComponents/mes-profils/mes-profils.component";
import { UpdateAskProfileComponent } from "./components/entrepriseComponents/update-ask-profile/update-ask-profile.component";
import { SetcvComponent } from "./components/candidat/setcv/setcv.component";
import { LoginEntrepriseComponent } from "./components/entrepriseComponents/login-entreprise/login-entreprise.component";
import { LoginComponent } from "./components/candidat/login/login.component";
import { MyAccountComponent } from "./components/entrepriseComponents/my-account/my-account.component";
import { UpdateMyAccountComponent } from "./components/entrepriseComponents/update-my-account/update-my-account.component";
import { RegistercandidatComponent } from "./components/candidat/registercandidat/registercandidat.component";
import { CandidatlistComponent } from "./components/candidat/candidatlist/candidatlist.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    PositioningPersonsComponent,
    ManagementRhComponent,
    AuditRhComponent,
    FiscalityAdministrativeComponent,
    TrainingComponent,
    ContactUsFormComponent,
    MaintenanceComponent,
    RegisterComponent,
    SearchProfileComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CreateOffreComponent,
    FindProfilesComponent,
    ForbiddenErrorsComponent,
    NotFondErrorsComponent,
    ProfileDetailComponent,
    ListOfferComponent,
    DetailOfferComponent,
    MyPublicationsComponent,
    OurMissionsComponent,
    OurPoliticComponent,
    OurVisionsComponent,
    OurValuesComponent,
    UpdateMyPublicationsComponent,
    AskProfileComponent,
    MesProfilsComponent,
    UpdateAskProfileComponent,
    LoginEntrepriseComponent,
    RegisterComponent,
    SetcvComponent,
    LoginEntrepriseComponent,
    MyAccountComponent,
    UpdateMyAccountComponent,
    RegistercandidatComponent,
    CandidatlistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgSelectModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      // toastClass: 'toast toast-bootstrap-compatibility-fix',
      // enableHtml: true ,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorServiceService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
