import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  apiLoaded = false;
  screenWidth = innerWidth;
  @ViewChild('player') set player(directive: any) {
    directive.height = '600';
    directive.width =  window.innerWidth;
  };
  videoId!: string;

  @Input()
  set id(id: string) {
    this.videoId = id;
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getLive();
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    console.log(innerWidth)
  }

  getLive() {
    const channelID = 'UCHRJBYrLXU3aTnub1EAhTvA';
    const apiKey = 'AIzaSyBGHAjk9HqWDmXinczaCNvYAGflDCK886g';
    console.log('aqui')
    this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=70x7&type=video&eventType=live&channelId=${channelID}&key=${apiKey}`)
      .subscribe(res => {
        console.log(res);
      })
  }

  onReady(event: any) {
    this.player.mute();
    this.player.playVideo();
  }

  onStateChange(event: any) {
    if (event.data === 0) {
      this.player.playVideo();
    }
  }

  goToYt() {
    window.open('https://www.youtube.com/@70x7church5',  '_blank')
  }

  goToInstagram() {
    window.open('https://www.instagram.com/church70x7/',  '_blank')
  }
}
