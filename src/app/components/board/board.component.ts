import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {

  title = '';
  tasks$;

  constructor(public taskService: TasksService) { }

  ngOnInit() {
    this.tasks$ = this.taskService.tasks$;
  }

  clear(): void {
    this.title = '';
  }

  saveTask() {
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
