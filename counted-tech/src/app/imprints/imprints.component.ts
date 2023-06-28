import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imprints',
  templateUrl: './imprints.component.html',
  styleUrls: ['./imprints.component.css']
})
export class ImprintsComponent {
  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }
}
