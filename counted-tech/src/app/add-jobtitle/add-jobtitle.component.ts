import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jobtitle',
  templateUrl: './add-jobtitle.component.html',
  styleUrls: ['./add-jobtitle.component.css']
})
export class AddJobtitleComponent {
  constructor(private router: Router) { }
  openMainComponent() {
    this.router.navigateByUrl('/')
  }

}
