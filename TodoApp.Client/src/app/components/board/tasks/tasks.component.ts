import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { inputEntrance, taskAnimation } from '../../../shared/animations/animations';
import { Task } from '../../../shared/models/Task';
import { TasksService } from '../../../shared/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  animations: [inputEntrance, taskAnimation]
})
export class TasksComponent implements OnInit, OnDestroy {
  content = '';
  tasks: Task[];

  taskSubscription: Subscription;
  addTaskSubscription: Subscription;
  updateTaskSubscription: Subscription;
  removeTaskSubscription: Subscription;

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.taskSubscription = this.taskService.getAll()
      .subscribe((data: Task[]) => this.tasks = data);
  }

  ngOnDestroy() {
    this.taskSubscription.unsubscribe();

    // tslint:disable-next-line:no-unused-expression
    this.addTaskSubscription && this.addTaskSubscription.unsubscribe();

    // tslint:disable-next-line:no-unused-expression
    this.updateTaskSubscription && this.updateTaskSubscription.unsubscribe();
  }

  saveTask(): void {
    const content = this.content.trim();

    if (content.length) {
      this.addTaskSubscription = this.taskService.create(content)
        .subscribe((response: Task) => this.tasks.push(response));
    }

    this.clear();
  }

  clear(): void {
    this.content = '';
  }

  updateTask(taskId, change) {
    this.updateTaskSubscription = this.taskService.update(taskId, change)
      .subscribe((updatedTask: Task) => {
        const index = this.tasks.findIndex(task => task.Id === taskId);

        this.tasks[index].Content = updatedTask.Content;
        this.tasks[index].IsCompleted = updatedTask.IsCompleted;
      });
  }

  removeTask(taskId) {
    this.removeTaskSubscription = this.taskService.remove(taskId)
      .subscribe(_ => {
        const index = this.tasks.findIndex(task => task.Id === taskId);
        this.tasks.splice(index, 1);
      });
  }
}
