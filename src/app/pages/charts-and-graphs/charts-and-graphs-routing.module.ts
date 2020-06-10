import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartsAndGraphsPage } from './charts-and-graphs.page';

const routes: Routes = [
  {
    path: '',
    component: ChartsAndGraphsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsAndGraphsPageRoutingModule {}
