import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BoardComponent } from './components/board/board.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskItemComponent } from './components/board/task-item/task-item.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { TasksService } from './services/tasks.service';

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    BoardComponent,
    NavbarComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AuthService,
    AngularFireDatabase,
    AuthGuard,
    AngularFireAuth,
    UserService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
