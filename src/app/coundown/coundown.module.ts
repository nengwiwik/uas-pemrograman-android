import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoundownPageRoutingModule } from './coundown-routing.module';

import { CoundownPage } from './coundown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoundownPageRoutingModule
  ],
  declarations: [CoundownPage]
})
export class CoundownPageModule {}
