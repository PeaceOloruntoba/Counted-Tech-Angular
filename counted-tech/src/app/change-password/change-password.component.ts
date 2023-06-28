import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
