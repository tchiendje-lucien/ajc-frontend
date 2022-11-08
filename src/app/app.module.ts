import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PositioningPersonsComponent } from './components/servicesComponents/positioning-persons/positioning-persons.component';
import { ManagementRhComponent } from './components/servicesComponents/management-rh/management-rh.component';
import { AuditRhComponent } from './components/servicesComponents/audit-rh/audit-rh.component';
import { FiscalityAdministrativeComponent } from './components/servicesComponents/fiscality-administrative/fiscality-administrative.component';
import { TrainingComponent } from './components/servicesComponents/training/training.component';

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
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
