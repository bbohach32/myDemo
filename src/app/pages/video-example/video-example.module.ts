import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoExamplePageRoutingModule } from './video-example-routing.module';

import { VideoExamplePage } from './video-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoExamplePageRoutingModule
  ],
  declarations: [VideoExamplePage]
})
export class VideoExamplePageModule {}
