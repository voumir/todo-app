import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
  @Input('task') task: Task;
  @Output() update = new EventEmitter();
  constructor() { }

  changeStatus() {
    this.update.emit({
      isDone: !this.task.isDone
    });
  }

}
