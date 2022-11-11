import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoursScreenPage } from './hours-screen.page';

const routes: Routes = [
  {
    path: '',
    component: HoursScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoursScreenPageRoutingModule {}
