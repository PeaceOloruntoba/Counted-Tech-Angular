import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
