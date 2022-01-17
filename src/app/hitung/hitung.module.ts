import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HitungPageRoutingModule } from './hitung-routing.module';

import { HitungPage } from './hitung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HitungPageRoutingModule
  ],
  declarations: [HitungPage]
})
export class HitungPageModule {}
