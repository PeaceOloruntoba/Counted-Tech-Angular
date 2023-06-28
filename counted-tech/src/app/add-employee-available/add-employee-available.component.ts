import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-available',
  templateUrl: './add-employee-available.component.html',
  styleUrls: ['./add-employee-available.component.css']
})
export class AddEmployeeAvailableComponent {
  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }
  openAddEmployeeSectionComponent(){
    this.router.navigateByUrl('/add-employee-section');
 }
 openAddEmployeeLocationComponent(){
  this.router.navigateByUrl('/add-employee-location')
 }
}
