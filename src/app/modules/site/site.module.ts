import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SiteComponent } from '../page/site.component';
import { MatButtonModule } from '@angular/material/button';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SiteComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    YouTubePlayerModule,
    HttpClientModule,
  ]
})
export class SiteModule { }
