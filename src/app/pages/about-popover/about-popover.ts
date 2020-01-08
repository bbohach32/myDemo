import { Component } from '@angular/core';

import { PopoverController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  template: `
    <ion-title>
      Example 
    </ion-title>
    <ion-list>
      <ion-item button>
        <ion-label>Example 1</ion-label>
      </ion-item>
      <ion-item button>
        <ion-label>Example 2</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(
    public popoverCtrl: PopoverController,
    public router: Router
  ) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.router.navigateByUrl('/support')
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
