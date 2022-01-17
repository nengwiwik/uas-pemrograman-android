import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UniversitasPage } from './universitas.page';

const routes: Routes = [
  {
    path: '',
    component: UniversitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitasPageRoutingModule {}
