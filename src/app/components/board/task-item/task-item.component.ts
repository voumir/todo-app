import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
  @Input('task') task: Task;
  constructor() { }

}
