import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-location-overview',
  templateUrl: './location-overview.component.html',
  styleUrls: ['./location-overview.component.css']
})
export class LocationOverviewComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
