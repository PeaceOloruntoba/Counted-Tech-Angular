import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-imprints',
  templateUrl: './imprints.component.html',
  styleUrls: ['./imprints.component.css']
})
export class ImprintsComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
