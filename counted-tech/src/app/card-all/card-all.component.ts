import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-all',
  templateUrl: './card-all.component.html',
  styleUrls: ['./card-all.component.css']
})
export class CardAllComponent {
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
 openMainComponent(){
  this.router.navigateByUrl('/')
 }
}
