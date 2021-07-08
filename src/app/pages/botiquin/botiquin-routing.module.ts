import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotiquinPage } from './botiquin.page';

const routes: Routes = [
  {
    path: '',
    component: BotiquinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotiquinPageRoutingModule {}
