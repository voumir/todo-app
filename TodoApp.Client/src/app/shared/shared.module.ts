import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { TasksService } from './services/tasks.service';
import { UserService } from './services/user.service';
import { FormComponent } from './components/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  exports: [
    FormsModule,
    CommonModule,
    FormComponent,
    NgbModule.forRoot().ngModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    TasksService,
    CookieService
  ],
  declarations: [FormComponent]
})
export class SharedModule { }
