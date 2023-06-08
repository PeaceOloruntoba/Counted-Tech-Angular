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
    AddJobtitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
