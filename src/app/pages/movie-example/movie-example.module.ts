import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieExamplePageRoutingModule } from './movie-example-routing.module';

import { MovieExamplePage } from './movie-example.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieExamplePageRoutingModule
  ],
  declarations: [MovieExamplePage]
})
export class MovieExamplePageModule {}
