import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TermsConditionComponent } from '../terms-condition/terms-condition.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  constructor(private router: Router) {}
  openMainComponent() {
    this.router.navigateByUrl('/');
  }
  openImprintComponent(){
    this.router.navigateByUrl('/imprint')
  }
  openTermsConditionComponent(){
    this.router.navigateByUrl('/terms-condition')
  }
  openPrivacyPolicyComponent(){
    this.router.navigateByUrl('/privacy-policy')
  }
  openChangePasswordComponent(){
    this.router.navigateByUrl('/change-password')
  }
  openLogoffComponent(){
    this.router.navigateByUrl('/logoff')
  }
  openDeleteAccountComponent(){
    this.router.navigateByUrl('/delete-account')
  }
}
