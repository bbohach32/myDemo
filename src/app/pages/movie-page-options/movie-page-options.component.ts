import { Component, OnInit } from '@angular/core';
import { MovieData } from '../movie-example/movie-example.page';
import { FirebaseService } from '../../providers/firebase.service';
import { Router } from '@angular/router';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'movie-page-options',
  templateUrl: './movie-page-options.component.html',
  styleUrls: ['./movie-page-options.component.scss'],
})
export class MoviePageOptionsComponent implements OnInit {

  constructor(
    public fireServ: FirebaseService,
    public router: Router,
    public popoverCtrl: PopoverController
    ) { }

  ngOnInit() {}

  async addMovie() {
    console.log("Adding default movie")
    let movie: MovieData = {title: "NewMovie", genre: ["New", "Genre"]}
    this.fireServ.addMovie(movie)
    const popover = await this.popoverCtrl.create({
      component: AddMovieComponent,
      componentProps: {movie: movie},
      translucent: true,
      backdropDismiss: true,
      cssClass: 'add-movie'
    });
    await popover.present();

    //this.popoverCtrl.dismiss()
  }

  support() {
    this.router.navigateByUrl('/support')
    this.popoverCtrl.dismiss()
  }
}
