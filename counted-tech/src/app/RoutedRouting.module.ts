import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardAllComponent } from './card-all/card-all.component';
import { CardVacationComponent } from './card-vacation/card-vacation.component';
import { CardAbsentComponent } from './card-absent/card-absent.component';
import { CardInactiveComponent } from './card-inactive/card-inactive.component';
import { CardAvailableComponent } from './card-available/card-available.component';
import { MainComponent } from './main/main.component';
import { AddEmployeeSectionComponent } from './add-employee-section/add-employee-section.component';
import { AddEmployeeLocationComponent } from './add-employee-location/add-employee-location.component';
import { AddEmployeeAvailableComponent } from './add-employee-available/add-employee-available.component';

const routes: Routes = [
    { path: "", component: MainComponent },
    { path: 'card-all', component: CardAllComponent },
    { path: 'card-available', component: CardAvailableComponent },
    { path: 'card-inactive', component: CardInactiveComponent },
    { path: 'card-absent', component: CardAbsentComponent },
    { path: 'card-vacation', component: CardVacationComponent },
    { path: 'add-employee-section', component: AddEmployeeSectionComponent },
    { path: 'add-employee-location', component: AddEmployeeLocationComponent },
    { path: 'add-employee-available', component: AddEmployeeAvailableComponent }
    // { path: 'card-absent', component: CardAbsentComponent },
    // { path: 'card-vacation', component: CardVacationComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutedRoutingModule { }
