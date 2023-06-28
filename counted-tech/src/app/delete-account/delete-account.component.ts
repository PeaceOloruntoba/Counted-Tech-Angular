import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {
  constructor(private location: Location) {}
  goBack() {
    this.location.back();
  }
}
