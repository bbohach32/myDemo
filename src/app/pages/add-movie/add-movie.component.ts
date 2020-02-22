import { Component, OnInit } from '@angular/core';
import { MovieData } from '../movie-example/movie-example.page';
import { NavParams, PopoverController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../../providers/firebase.service';
import { isString } from 'util';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {

  movieToAdd: MovieData

  constructor(
    public navParams: NavParams,
    public popoverCtrl: PopoverController,
    public fireServ: FirebaseService
  ) { }

  ngOnInit() {
    this.movieToAdd = this.navParams.get('movie');
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      
      if (isString(this.movieToAdd.genre)) {
        this.movieToAdd.genre = this.movieToAdd.genre.split(',')
        this.fireServ.addMovie(this.movieToAdd)
      }
      this.close()
    }
  }

  close() {
    this.popoverCtrl.dismiss();
  }

}
