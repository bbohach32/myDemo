import { Component, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'movie-example',
  templateUrl: './movie-example.page.html',
  styleUrls: ['./movie-example.page.scss'],
})
export class MovieExamplePage implements OnInit {
  
  movies: any[];
  constructor(public confData: ConferenceData,
    ) { }

  ngOnInit() {
    this.confData.getMovies().subscribe((movieData: any) => {
      this.movies = movieData
    })
    console.log(this.movies)
  }

}
