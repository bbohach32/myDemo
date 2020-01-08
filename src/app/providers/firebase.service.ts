import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

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
  ) { }

  async addSupportMessage(data: SupportMessage) {
    //data.user = this.fireAuth.auth.currentUser.email
    this.afs.firestore.collection('supports').add(data).then(() => {
      return true;
    })
    return false;
  }
}
