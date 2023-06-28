import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-section',
  templateUrl: './add-employee-section.component.html',
  styleUrls: ['./add-employee-section.component.css']
})
export class AddEmployeeSectionComponent {
  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }
  openAddEmployeeLocationComponent(){
    this.router.navigateByUrl('/add-employee-location')
  }
  openAddEmployeeAvailableComponent(){
    this.router.navigateByUrl('/add-employee-available')
  }
}
