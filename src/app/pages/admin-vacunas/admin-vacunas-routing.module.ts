import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminVacunasPage } from './admin-vacunas.page';

const routes: Routes = [
  {
    path: '',
    component: AdminVacunasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminVacunasPageRoutingModule {}
