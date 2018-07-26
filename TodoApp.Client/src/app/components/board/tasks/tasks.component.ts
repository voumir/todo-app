import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../shared/services/tasks.service';
import { inputEntrance, taskAnimation } from '../../../shared/animations/animations';
// TODO: Update
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  animations: [inputEntrance, taskAnimation]
})
export class TasksComponent implements OnInit {
  content = '';

  constructor(public taskService: TasksService) { }

  ngOnInit() {
    // TODO: GET tasks
  }

  clear(): void {
    this.content = '';
  }

  saveTask(): void {
    const content: string = this.content.trim();

    if (content.length) {
      this.taskService.create({ content });
    }

    this.clear();
  }
}
