import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
//import {  }

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {}

}
