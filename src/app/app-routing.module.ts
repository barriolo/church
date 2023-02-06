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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
