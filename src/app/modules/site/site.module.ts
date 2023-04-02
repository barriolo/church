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
import { CultoOnlineComponent } from './page/culto-online/culto-online.component';
import { ContatoComponent } from './page/contato/contato.component';
import { LouvorFinanceiroComponent } from './page/louvor-financeiro/louvor-financeiro.component';
import { CultoPresencialComponent } from './page/culto-presencial/culto-presencial.component';
import { HeaderComponent } from './page/header/header.component';
import { QuemSomosComponent } from './page/quem-somos/quem-somos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GuestComponent } from './page/guest/guest.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { DateMaskDirective } from 'src/app/core/directive/date-mask.directive';
import { NgxMaskModule } from 'ngx-mask';
import { ToastModule } from 'src/app/shared/toast/toast.module';

@NgModule({
  declarations: [
    SiteComponent,
    EdmComponent,
    CultoOnlineComponent,
    ContatoComponent,
    LouvorFinanceiroComponent,
    CultoPresencialComponent,
    HeaderComponent,
    QuemSomosComponent,
    GuestComponent,
    DateMaskDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    YouTubePlayerModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatRadioModule,
    NgxMaskModule.forRoot(),
    ToastModule
  ]
})
export class SiteModule { }
