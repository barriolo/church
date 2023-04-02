import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListGuestComponent } from './page/list-guest/list-guest.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ListGuestComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule,
    FlexLayoutModule
  ]
})
export class GuestViewModule { }
