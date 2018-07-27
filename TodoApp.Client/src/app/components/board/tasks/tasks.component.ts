import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../../shared/services/tasks.service';
import { inputEntrance, taskAnimation } from '../../../shared/animations/animations';
import { Task } from '../../../shared/models/Task';
// TODO: Update
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  animations: [inputEntrance, taskAnimation]
})
export class TasksComponent implements OnInit {
  content = '';
  tasks: any;

  constructor(public taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getAll().subscribe(data => this.tasks = data);
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
