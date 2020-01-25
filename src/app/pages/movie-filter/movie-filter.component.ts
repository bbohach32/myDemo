import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Config } from '@ionic/angular';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss'],
})
export class MovieFilterComponent implements AfterViewInit {
  ios: boolean;

  tracks: {name: string, icon: string, isChecked: boolean}[] = [];

  constructor(
    public confData: ConferenceData,
    public config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams,

  ) { }

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;
  }

  // TODO use the ionViewDidEnter event
  ngAfterViewInit() {
    // passed in array of track names that should be excluded (unchecked)
    const excludedFilters = this.navParams.get('excludedGenres');

    this.confData.getGenres().subscribe((tracks: any[]) => {
      tracks.forEach(track => {
        this.tracks.push({
          name: track.name,
          icon: track.icon,
          isChecked: (excludedFilters.indexOf(track.name) === -1)
        });
      });
    });
  }

  selectAll(check: boolean) {
    // set all to checked or unchecked
    this.tracks.forEach(track => {
      track.isChecked = check;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedFilters = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedFilters);
  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }

}
