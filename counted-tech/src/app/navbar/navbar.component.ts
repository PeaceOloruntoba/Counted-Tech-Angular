import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }
  openAddWorklocationComponent(){
    this.router.navigateByUrl('/add-work-location')
  }
  openAddJobtitleComponent(){
    this.router.navigateByUrl('/add-jobtitle')
  }
  openSettingsComponent(){
    this.router.navigateByUrl('/settings')
  }
  openAddEmployeeLocationComponent(){
    this.router.navigateByUrl('/add-employee-location')
  }
}
