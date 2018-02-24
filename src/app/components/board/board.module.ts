import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TasksComponent } from './tasks/tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';

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
