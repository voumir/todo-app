import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

import { environment } from '../../../environments/environment';
// TODO: Get rid of it
@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth
  ]
})
export class FirebaseModule { }
