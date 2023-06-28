import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-inactive',
  templateUrl: './card-inactive.component.html',
  styleUrls: ['./card-inactive.component.css']
})
export class CardInactiveComponent {
  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }
}
