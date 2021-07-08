import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminVacunasPageRoutingModule } from './admin-vacunas-routing.module';

import { AdminVacunasPage } from './admin-vacunas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminVacunasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminVacunasPage]
})
export class AdminVacunasPageModule {}
