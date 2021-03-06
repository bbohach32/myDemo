import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPage } from './about';
import { PopoverPage } from '../about-popover/about-popover';
import { AboutPageRoutingModule } from './about-routing.module';
import { ResumeComponent } from '../resume/resume.component';
import { TranscriptComponent } from '../transcript/transcript.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage, PopoverPage, ResumeComponent, TranscriptComponent],
  entryComponents: [PopoverPage, ResumeComponent, TranscriptComponent],
  bootstrap: [AboutPage],
})
export class AboutModule {}
