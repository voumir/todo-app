import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RoutingModule } from '../app.routing';
import { BoardModule } from './board/board.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    SharedModule,
    BoardModule,
    RoutingModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }