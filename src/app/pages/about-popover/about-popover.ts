import { Component } from '@angular/core';

import { PopoverController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ResumeComponent } from '../resume/resume.component'
import { TranscriptComponent } from '../transcript/transcript.component';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="resume()">
        <ion-label>Resume</ion-label>
      </ion-item>
      <ion-item button (click)="transcript()">
        <ion-label>Transcript</ion-label>
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

  async resume() {
      const popover = await this.popoverCtrl.create({
        component: ResumeComponent,
        cssClass: "resume"
      });
      await popover.present();
  }

  async transcript() {
    const popover = await this.popoverCtrl.create({
      component: TranscriptComponent,
      cssClass: "resume"
    });
    await popover.present();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
