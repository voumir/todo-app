import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TasksComponent,
    TaskItemComponent
  ]
})
export class BoardModule { }
