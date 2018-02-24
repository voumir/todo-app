import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth
  ]
})
export class FirebaseModule { }
