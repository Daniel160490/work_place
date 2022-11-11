import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoursScreenPageRoutingModule } from './hours-screen-routing.module';

import { HoursScreenPage } from './hours-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoursScreenPageRoutingModule
  ],
  declarations: [HoursScreenPage]
})
export class HoursScreenPageModule {}
