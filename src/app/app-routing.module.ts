import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hitung',
    loadChildren: () => import('./hitung/hitung.module').then( m => m.HitungPageModule)
  },
  {
    path: 'coundown',
    loadChildren: () => import('./coundown/coundown.module').then( m => m.CoundownPageModule)
  },
  {
    path: 'universitas',
    loadChildren: () => import('./universitas/universitas.module').then( m => m.UniversitasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
