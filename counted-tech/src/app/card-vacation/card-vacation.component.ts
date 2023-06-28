import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-vacation',
  templateUrl: './card-vacation.component.html',
  styleUrls: ['./card-vacation.component.css']
})
export class CardVacationComponent {
  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }
}
