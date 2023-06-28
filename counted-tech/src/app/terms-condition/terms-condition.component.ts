import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
