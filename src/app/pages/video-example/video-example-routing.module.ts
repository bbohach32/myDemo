import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoExamplePage } from './video-example.page';

const routes: Routes = [
  {
    path: '',
    component: VideoExamplePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoExamplePageRoutingModule {}
