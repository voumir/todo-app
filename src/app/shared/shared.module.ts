import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseModule } from './firebase/firebase.module';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { TasksService } from './services/tasks.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FirebaseModule,
    NgbModule.forRoot()
  ],
  exports: [
    FormsModule,
    CommonModule,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    TasksService
  ]
})
export class SharedModule { }