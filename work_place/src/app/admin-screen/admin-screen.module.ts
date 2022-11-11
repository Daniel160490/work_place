import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminScreenPageRoutingModule } from './admin-screen-routing.module';

import { AdminScreenPage } from './admin-screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminScreenPageRoutingModule
  ],
  declarations: [AdminScreenPage]
})
export class AdminScreenPageModule {}
