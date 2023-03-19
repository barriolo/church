import { QuemSomosComponent } from './modules/site/page/quem-somos/quem-somos.component';
import { EdmComponent } from './modules/site/page/edm/edm.component';
import { SiteComponent } from './modules/site/page/site.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
