import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListGuestComponent } from 'src/app/modules/guest-view/page/list-guest/list-guest.component';

const routes: Routes = [
  {
    path: 'guest-list',
    component: ListGuestComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
