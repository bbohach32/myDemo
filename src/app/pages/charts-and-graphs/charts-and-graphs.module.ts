import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChartsAndGraphsPageRoutingModule } from './charts-and-graphs-routing.module';

import { ChartsAndGraphsPage } from './charts-and-graphs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsAndGraphsPageRoutingModule
  ],
  declarations: [ChartsAndGraphsPage]
})
export class ChartsAndGraphsPageModule {}
