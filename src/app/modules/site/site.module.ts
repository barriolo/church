import { EdmComponent } from './page/edm/edm.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SiteComponent } from './page/site.component';
import { MatButtonModule } from '@angular/material/button';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SiteComponent, EdmComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    YouTubePlayerModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class SiteModule { }
