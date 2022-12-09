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
import { LoginComponent } from './components/entrepriseComponents/login/login.component';
import { ForgotPasswordComponent } from './components/entrepriseComponents/forgot-password/forgot-password.component';
import { CreateOffreComponent } from './components/entrepriseComponents/create-offre/create-offre.component';
import { FindProfilesComponent } from './components/candidat/find-profiles/find-profiles.component';
import { HttpInterceptorServiceService } from './services/entrepriseServices/HttpInterceptorService/http-interceptor-service.service';
import { ForbiddenErrorsComponent } from './components/errorsComponents/forbidden-errors/forbidden-errors.component';
import { NotFondErrorsComponent } from './components/errorsComponents/not-fond-errors/not-fond-errors.component';
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
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorServiceService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
