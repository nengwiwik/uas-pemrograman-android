import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule , IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { UniversitasPageRoutingModule } from './universitas-routing.module';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { UniversitasPage } from './universitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniversitasPageRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  declarations: [UniversitasPage]
})
export class UniversitasPageModule {}
