import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../../../shared/services/tasks.service';
import { inputEntrance, taskAnimation } from '../../../shared/animations/animations';
import { Task } from '../../../shared/models/Task';
import { Subscription } from 'rxjs/Subscription';
// TODO: Update
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  animations: [inputEntrance, taskAnimation]
})
export class TasksComponent implements OnInit, OnDestroy {
  content = '';
  tasks: Task[];

  taskSubscription: Subscription;

  constructor(public taskService: TasksService) { }

  ngOnInit() {
    this.taskSubscription = this.taskService.getAll()
      .subscribe((data: Task[]) => this.tasks = data);
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();
  }

  clear(): void {
    this.content = '';
  }

  saveTask(): void {
    const content = this.content.trim();

    if (content.length) {
      this.taskService.create(content)
        .subscribe((response: Task) => this.tasks.push(response));
    }

    this.clear();
  }
}
