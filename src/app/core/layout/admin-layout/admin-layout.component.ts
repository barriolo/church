import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  screenWidth = innerWidth;

  constructor() { }

  ngOnInit(): void {
  }

  goToYt() {
    window.open('https://www.youtube.com/@70x7church5',  '_blank')
  }

  goToInstagram() {
    window.open('https://www.instagram.com/church70x7/',  '_blank')
  }
}
