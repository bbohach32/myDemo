import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieExamplePage } from './movie-example.page';

const routes: Routes = [
  {
    path: '',
    component: MovieExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieExamplePageRoutingModule {}
