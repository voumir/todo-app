import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../shared/models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input('task') task: Task;
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  content = '';
  editing = false;

  constructor() { }

  ngOnInit() {
    this.content = this.task.Content;
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
        Content: this.content.trim()
      });

      this.stopEditing();
    }
  }

  changeStatus(): void {
    this.update.emit({
      IsCompleted: !this.task.IsCompleted
    });
  }

}
