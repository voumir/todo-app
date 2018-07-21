import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input('task') task: Task;
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  title = '';
  editing = false;

  constructor() { }

  ngOnInit() {
    this.title = this.task.title;
  }

  toggleEdit(): void {
    this.editing = !this.editing;
  }

  stopEditing(): void {
    this.editing = false;
  }

  saveTask(): void {
    if (this.editing) {
      this.update.emit({
        title: this.title.trim()
      });

      this.stopEditing();
    }
  }

  changeStatus(): void {
    this.update.emit({
      isDone: !this.task.isDone
    });
  }

}
