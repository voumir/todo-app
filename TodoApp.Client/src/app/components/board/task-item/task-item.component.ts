import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../shared/models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent implements OnInit {
  @Input('task') task: any;
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  content = '';
  editing = false;

  constructor() { }

  ngOnInit() {
    this.content = this.task.content;
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
        title: this.content.trim()
      });

      this.stopEditing();
    }
  }

  changeStatus(): void {
    this.update.emit({
      isCompleted: !this.task.isCompleted
    });
  }

}
