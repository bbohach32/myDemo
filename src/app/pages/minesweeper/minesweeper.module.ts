import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinesweeperPageRoutingModule } from './minesweeper-routing.module';

import { MinesweeperPage } from './minesweeper.page';

import { Injectable, NgModule } from '@angular/core';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BestScoresTableModule } from '../../_components/best-scores-table/best-scores-table.module';
import { CellModule } from '../../_components/cell/cell.module';
import { CoreModule } from '../../providers/core.module';
import { SharedModule } from '../../shared/shared.module';
import * as Hammer from 'hammerjs';

@Injectable()
export class MinesweeperHammerConfig extends HammerGestureConfig {
    buildHammer(element: HTMLElement) {
        const ta = new Hammer(element, {
            touchAction: "auto",
        });
        return ta;
    }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinesweeperPageRoutingModule,
    CoreModule,
    SharedModule,
    BestScoresTableModule,
    CellModule
  ],
  declarations: [MinesweeperPage],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MinesweeperHammerConfig
}]
})
export class MinesweeperPageModule {}
