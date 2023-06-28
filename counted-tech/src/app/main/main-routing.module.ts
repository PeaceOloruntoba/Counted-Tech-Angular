import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAllComponent } from '../card-all/card-all.component';
import { CardVacationComponent } from '../card-vacation/card-vacation.component';
import { CardAbsentComponent } from '../card-absent/card-absent.component';
import { CardInactiveComponent } from '../card-inactive/card-inactive.component';
import { CardAvailableComponent } from '../card-available/card-available.component';

const routes: Routes = [
  {path: 'card-all', component: CardAllComponent},
  {path: 'card-available', component: CardAvailableComponent},
  {path: 'card-inactive', component: CardInactiveComponent},
  {path: 'card-absent', component: CardAbsentComponent},
  {path: 'card-vacation', component: CardVacationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
