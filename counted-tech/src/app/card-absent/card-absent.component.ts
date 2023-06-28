import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-absent',
  templateUrl: './card-absent.component.html',
  styleUrls: ['./card-absent.component.css']
})
export class CardAbsentComponent {
  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }
}
