import { Component, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { ModalController, Config, PopoverController } from '@ionic/angular';
import { MovieFilterComponent } from '../movie-filter/movie-filter.component';
import { FirebaseService } from '../../providers/firebase.service';
import { MoviePageOptionsComponent } from '../movie-page-options/movie-page-options.component';

export interface MovieData {
  title: string,
  genre: string[]
}

@Component({
  selector: 'movie-example',
  templateUrl: './movie-example.page.html',
  styleUrls: ['./movie-example.page.scss'],
})

export class MovieExamplePage implements OnInit {
  
  movies: MovieData[];
  shownMovies: MovieData[];
  excludeGenres: string[] = [];
  searchTerm: string;
  caseSensitive: boolean = false;
  ios: boolean;
  genres = Array<string>()

  constructor(
    public confData: ConferenceData,
    public modalCtrl: ModalController,
    private config: Config,
    private fireServ: FirebaseService,
    public popoverCtrl: PopoverController
    ) { }

  ngOnInit() {
    this.ios = this.config.get('mode') === `ios`;

    this.confData.getMovies().subscribe((movieData: MovieData[]) => {
      this.movies = movieData
    })

    this.fireServ.getMovies().then((fireMovies: any) => {
      //console.log(fireMovies)
      let movieKeys = Object.keys(fireMovies)
      movieKeys.forEach((key) => {
        //console.log(key)
        let newMovie: MovieData = {title: key, genre: fireMovies[key].genres}
        //console.log(newMovie)
        if (!this.movies.find(movie => movie.title === newMovie.title)) {
          this.movies.push({title: key, genre: fireMovies[key].genres})
        }
        /*newMovie.genre.forEach((genreA) => {
          if (!this.genres.find(genreB => genreB === genreA)) {
            this.genres.push(genreA)
          }
          console.log("Genre", genreA)
        })*/
      })
      this.movies.sort((a,b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
      this.movies.forEach((movie) => {
        movie.genre.forEach((genreA) => {
          //if (this.genres != null) {
            if (!this.genres.find(genreB => genreB === genreA)) {
              this.genres.push(genreA)
            }
          //} 
        })
        console.log("Genres", this.genres)
      })
    })

    console.log("Movies after init")
    //console.log(this.movies)
  }

  ionViewWillEnter() {
    console.log("Movies will enter")
    console.log(this.movies)

    this.shownMovies = this.movies
  }

  ionViewDidEnter() {
    this.movies.forEach((movie) => {
      movie.genre.forEach((genreA) => {
        //if (this.genres != null) {
          if (!this.genres.find(genreB => genreB === genreA)) {
            this.genres.push(genreA)
          }
        //} 
      })
      console.log("Genres", this.genres)
    })
  }

  async addMovie(event: Event) {
    console.log("Adding default movie")
    let movie: MovieData = {title: "NewMovie", genre: ["New", "Genre"]}
    this.fireServ.addMovie(movie)
    const popover = await this.popoverCtrl.create({
      component: MoviePageOptionsComponent,
      translucent: true,
      event,
      backdropDismiss: true,
      cssClass: 'movie-page-options'
    });

    await popover.present()


    //this.confData.addMovieData(movie)
  }

  toggleDelete() {
    this.caseSensitive = !this.caseSensitive
    this.searchQueryChanged()
    console.log("im here")
  }

  searchQueryChanged() {
    this.updateFilters()

    if (this.searchTerm.length != 0) {
      if (this.caseSensitive) {
        this.shownMovies = this.shownMovies.filter(movie => 
          movie.title.includes(this.searchTerm))
      } else {
        this.shownMovies = this.shownMovies.filter(movie => 
          movie.title.toLowerCase().includes(this.searchTerm.toLowerCase()))
      }
    }
    
  }

  async presentFilter() {
    console.log("Genres", this.genres)
    const modal = await this.modalCtrl.create({
      component: MovieFilterComponent,
      componentProps: { 
        excludedGenres: this.excludeGenres,
        allGenres: this.genres  
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeGenres = data;
      console.log(data)
      this.updateFilters();
    }
  }

  updateFilters() {
    // Close any open sliding items when the schedule updates
    //if (this.movies) {
    //  this.movies.closeSlidingItems();
    //}
    console.log(this.shownMovies)
    var filtered = this.movies.filter(movie => {
      let x = movie.genre.filter(genre => !this.excludeGenres.includes(genre)); 
      console.log(movie.genre, x)
      if (x.length == 0)  {
        return false
      } else {
        return true
      }
    });
    this.shownMovies = filtered
    console.log(this.shownMovies)
  }

}
