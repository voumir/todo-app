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

  title = '';
  tasks$;

  constructor(public taskService: TasksService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.tasks$;
  }

  clear(): void {
    this.title = '';
  }

  saveTask(): void {
    const title: string = this.title.trim();

    if (title.length) {
      const newTask = {
        isDone: false,
        created: Date.now(),
        title: title
      };
      this.taskService.create(newTask);
    }

    this.clear();
  }
}
