import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private router: Router) {}
  
  openCardAllComponent() {
    this.router.navigateByUrl('/card-all');
  }
  openCardAvailableComponent() {
    this.router.navigateByUrl('/card-available');
  }
  openCardInactiveComponent() {
    this.router.navigateByUrl('/card-inactive');
  }
  openCardAbsentComponent() {
    this.router.navigateByUrl('/card-absent');
  }
  openCardVacationComponent(){
    this.router.navigateByUrl('/card-vacation');
 }
}
