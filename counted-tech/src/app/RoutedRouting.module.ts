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
import { AddWorklocationComponent } from './add-worklocation/add-worklocation.component';
import { AddJobtitleComponent } from './add-jobtitle/add-jobtitle.component';
import { LocationOverviewComponent } from './location-overview/location-overview.component';
import { ImprintsComponent } from './imprints/imprints.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';
import { SettingsComponent } from './settings/settings.component';
import { LogoffComponent } from './logoff/logoff.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';

const routes: Routes = [
    { path: "", component: MainComponent },
    { path: 'card-all', component: CardAllComponent },
    { path: 'card-available', component: CardAvailableComponent },
    { path: 'card-inactive', component: CardInactiveComponent },
    { path: 'card-absent', component: CardAbsentComponent },
    { path: 'card-vacation', component: CardVacationComponent },
    { path: 'add-employee-section', component: AddEmployeeSectionComponent },
    { path: 'add-employee-location', component: AddEmployeeLocationComponent },
    { path: 'add-employee-available', component: AddEmployeeAvailableComponent },
    { path: 'add-work-location', component: AddWorklocationComponent },
    { path: 'add-jobtitle', component: AddJobtitleComponent },
    { path: 'location-overview', component:LocationOverviewComponent },
    { path: 'imprint', component: ImprintsComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms-condition', component:TermsConditionComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'logoff', component: LogoffComponent },
    { path: 'change-password', component:ChangePasswordComponent },
    { path: 'delete-account', component:DeleteAccountComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutedRoutingModule { }
