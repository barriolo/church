import { Component } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent {

  screenWidth = innerWidth;

  goToYt() {
    window.open('https://www.youtube.com/@70x7church5',  '_blank')
  }

  goToInstagram() {
    window.open('https://www.instagram.com/church70x7/',  '_blank')
  }
}
