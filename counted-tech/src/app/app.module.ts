import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';
import { CardAvailableComponent } from './card-available/card-available.component';
import { CardAllComponent } from './card-all/card-all.component';
import { CardInactiveComponent } from './card-inactive/card-inactive.component';
import { CardAbsentComponent } from './card-absent/card-absent.component';
import { CardVacationComponent } from './card-vacation/card-vacation.component';
import { MiddleComponent } from './middle/middle.component';
import { BottomComponent } from './bottom/bottom.component';
import { LocationOverviewComponent } from './location-overview/location-overview.component';
import { AddJobtitleComponent } from './add-jobtitle/add-jobtitle.component';
import { AddWorklocationComponent } from './add-worklocation/add-worklocation.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ImprintsComponent } from './imprints/imprints.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { AddEmployeeLocationComponent } from './add-employee-location/add-employee-location.component';
import { AddEmployeeSectionComponent } from './add-employee-section/add-employee-section.component';
import { AddEmployeeAvailableComponent } from './add-employee-available/add-employee-available.component';
import { NewsComponent } from './news/news.component';
import { SettingsComponent } from './settings/settings.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { LogoffComponent } from './logoff/logoff.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    NavbarComponent,
    CardsComponent,
    CardAvailableComponent,
    CardAllComponent,
    CardInactiveComponent,
    CardAbsentComponent,
    CardVacationComponent,
    MiddleComponent,
    BottomComponent,
    LocationOverviewComponent,
    AddJobtitleComponent,
    AddWorklocationComponent,
    AddNewsComponent,
    ImprintsComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent,
    AddEmployeeLocationComponent,
    AddEmployeeSectionComponent,
    AddEmployeeAvailableComponent,
    NewsComponent,
    SettingsComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    LogoffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
