import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoundownPage } from './coundown.page';

const routes: Routes = [
  {
    path: '',
    component: CoundownPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoundownPageRoutingModule {}
