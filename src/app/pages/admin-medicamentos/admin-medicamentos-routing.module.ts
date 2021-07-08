import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMedicamentosPage } from './admin-medicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMedicamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMedicamentosPageRoutingModule {}
