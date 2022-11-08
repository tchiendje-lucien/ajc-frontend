import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { ContactUsComponent } from "./components/contact-us/contact-us.component";
import { PositioningPersonsComponent } from "./components/servicesComponents/positioning-persons/positioning-persons.component";
import { ManagementRhComponent } from './components/servicesComponents/management-rh/management-rh.component';
import { AuditRhComponent } from './components/servicesComponents/audit-rh/audit-rh.component';
import { FiscalityAdministrativeComponent } from './components/servicesComponents/fiscality-administrative/fiscality-administrative.component';
import { TrainingComponent } from './components/servicesComponents/training/training.component';

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
    path: "nos-services/traning",
    component: TrainingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
//export const appRoutingModule = RouterModule.forRoot(routes);
//export const RoutingComponent = [SettingsComponent,LoginComponent];
