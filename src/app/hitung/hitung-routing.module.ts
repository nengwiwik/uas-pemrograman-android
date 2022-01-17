import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HitungPage } from './hitung.page';

const routes: Routes = [
  {
    path: '',
    component: HitungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HitungPageRoutingModule {}
