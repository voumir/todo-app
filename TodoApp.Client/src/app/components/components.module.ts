import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';

import { RoutingModule } from '../app.routing';
import { SharedModule } from '../shared/shared.module';
import { BoardModule } from './board/board.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    BoardModule,
    RoutingModule,
    ParticlesModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
