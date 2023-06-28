import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-available',
  templateUrl: './card-available.component.html',
  styleUrls: ['./card-available.component.css']
})
export class CardAvailableComponent {

  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }
}
