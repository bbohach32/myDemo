import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'transcript',
  templateUrl: './transcript.component.html',
  styleUrls: ['./transcript.component.scss'],
})
export class TranscriptComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {}

}
