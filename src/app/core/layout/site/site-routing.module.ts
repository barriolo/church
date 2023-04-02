import { GuestComponent } from './../../../modules/site/page/guest/guest.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { EdmComponent } from 'src/app/modules/site/page/edm/edm.component';
import { QuemSomosComponent } from 'src/app/modules/site/page/quem-somos/quem-somos.component';
import { SiteComponent } from 'src/app/modules/site/page/site.component';

const routes: Routes = [
  {
    path: '',
    component: SiteComponent
  },
  {
    path: 'edm',
    component: EdmComponent
  },
  {
    path: 'quem-somos',
    component: QuemSomosComponent
  },
  {
    path: 'auth',
    component: LoginComponent
  },
  {
    path: 'guest',
    component: GuestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
