import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { MovieData } from '../pages/movie-example/movie-example.page';
import { isString } from 'util';

interface SupportMessage {
  message: string,
  user: string
}

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  constructor(
    public afs: AngularFirestore,
    public fireAuth: AngularFireAuth,
    private firebaseService: FirebaseService
  ) { 
    firebase.auth().useDeviceLanguage()
  }

  addMovie(movie: MovieData) {
    let entry;
    if (isString(movie.genre)) {
      entry = {[movie.title]: {genres: [movie.genre]}}  
    } else {
      entry = {[movie.title]: {genres: movie.genre}}
    }
    this.afs.firestore.collection('movieData').doc('movies').update(entry).then(() => {
      return true
    }).catch(() => {
      return false
    })
  }

  async getMovies() {
    return await new Promise<any>((resolve, reject) => {
      //let user = this.fireAuth.auth.currentUser.email
      var stored;
      this.afs.firestore.collection('movieData').doc('movies').get().then((values) => {
        if (stored = values.data()) {
          console.log(values)
          console.log(values.data())
          resolve(stored);
        }
      })
    })
  }

  async addSupportMessage(data: SupportMessage) {
    //data.user = this.fireAuth.auth.currentUser.email
    let date = new Date()
    this.afs.firestore.collection('supports').doc(date.toString()).set(data).then(() => {
      return true;
    })
    return false;
  }

  register(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }

  login(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(
        res => resolve(res),
        err => reject(err))
    })
  }

  logout() {
    return new Promise<any>((resolve, reject) => {
      this.fireAuth.auth.signOut()
      .then(() => {
        //this.firebaseService.unsubscribeOnLogOut();
        resolve();
      }).catch((error) => {
        console.log(error);
        reject();
      });
    })
  }
}
