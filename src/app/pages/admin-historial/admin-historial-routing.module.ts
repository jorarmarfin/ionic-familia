import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminHistorialPage } from './admin-historial.page';

const routes: Routes = [
  {
    path: '',
    component: AdminHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminHistorialPageRoutingModule {}
