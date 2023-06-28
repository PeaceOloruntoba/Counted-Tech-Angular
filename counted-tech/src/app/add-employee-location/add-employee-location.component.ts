import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee-location',
  templateUrl: './add-employee-location.component.html',
  styleUrls: ['./add-employee-location.component.css']
})
export class AddEmployeeLocationComponent {
  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }
  openAddEmployeeSection(){
    this.router.navigateByUrl('/add-employee-section')
  }
  oppenAddEmployeeAvailable(){
    this.router.navigateByUrl('/add-employee-available')
  }
}
