import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BoardComponent } from './components/board/board.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: BoardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
