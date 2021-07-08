import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMedicamentosPageRoutingModule } from './admin-medicamentos-routing.module';

import { AdminMedicamentosPage } from './admin-medicamentos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMedicamentosPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [AdminMedicamentosPage]
})
export class AdminMedicamentosPageModule {}
