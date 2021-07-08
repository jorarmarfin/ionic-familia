import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminHistorialPageRoutingModule } from './admin-historial-routing.module';

import { AdminHistorialPage } from './admin-historial.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminHistorialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminHistorialPage]
})
export class AdminHistorialPageModule {}
