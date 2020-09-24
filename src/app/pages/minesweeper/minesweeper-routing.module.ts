import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinesweeperPage } from './minesweeper.page';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BestScoresTableModule } from '../../_components/best-scores-table/best-scores-table.module'
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

const routes: Routes = [
  {
    path: '',
    component: MinesweeperPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CoreModule,
    SharedModule,
    BestScoresTableModule,
    CellModule
  ],
  exports: [RouterModule],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MinesweeperHammerConfig
  }]
})
export class MinesweeperPageRoutingModule {}
