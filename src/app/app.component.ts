import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-church';
  screenWidth = innerWidth;

  goToYt() {
    window.open('https://www.youtube.com/@70x7church5',  '_blank')
  }

  goToInstagram() {
    window.open('https://www.instagram.com/church70x7/',  '_blank')
  }

}
