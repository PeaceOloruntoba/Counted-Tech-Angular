import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent {
  constructor(private router: Router) {}
  openMainComponent() {
    this.router.navigateByUrl('/');
  }
}
