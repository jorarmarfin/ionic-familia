import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotiquinPageRoutingModule } from './botiquin-routing.module';

import { BotiquinPage } from './botiquin.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotiquinPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BotiquinPage]
})
export class BotiquinPageModule {}
