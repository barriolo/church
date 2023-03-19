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
import { CultoOnlineComponent } from './page/culto-online/culto-online.component';
import { ContatoComponent } from './page/contato/contato.component';
import { LouvorFinanceiroComponent } from './page/louvor-financeiro/louvor-financeiro.component';
import { CultoPresencialComponent } from './page/culto-presencial/culto-presencial.component';
import { HeaderComponent } from './page/header/header.component';
import { QuemSomosComponent } from './page/quem-somos/quem-somos.component';

@NgModule({
  declarations: [SiteComponent, EdmComponent, CultoOnlineComponent, ContatoComponent, LouvorFinanceiroComponent, CultoPresencialComponent, HeaderComponent, QuemSomosComponent],
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
