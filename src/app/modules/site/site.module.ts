import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SiteComponent } from '../page/site.component';
import { MatButtonModule } from '@angular/material/button';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [SiteComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    YouTubePlayerModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class SiteModule { }
