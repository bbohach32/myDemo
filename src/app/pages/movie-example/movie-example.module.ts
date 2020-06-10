import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieExamplePageRoutingModule } from './movie-example-routing.module';

import { MovieExamplePage } from './movie-example.page';
import { MovieFilterComponent } from '../movie-filter/movie-filter.component';
import { MoviePageOptionsComponent } from '../movie-page-options/movie-page-options.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieExamplePageRoutingModule,
  ],
  declarations: [MovieExamplePage, MovieFilterComponent, MoviePageOptionsComponent, AddMovieComponent],
  entryComponents: [MovieFilterComponent, MoviePageOptionsComponent, AddMovieComponent]
})
export class MovieExamplePageModule {}
