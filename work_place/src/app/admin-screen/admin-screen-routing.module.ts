import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminScreenPage } from './admin-screen.page';

const routes: Routes = [
  {
    path: '',
    component: AdminScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminScreenPageRoutingModule {}
