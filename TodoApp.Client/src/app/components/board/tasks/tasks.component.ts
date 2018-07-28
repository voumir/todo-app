import { Component, OnInit, OnDestroy } from '@angular/core';
import { TasksService } from '../../../shared/services/tasks.service';
import { inputEntrance, taskAnimation } from '../../../shared/animations/animations';
import { Task } from '../../../shared/models/Task';
import { Subscription } from 'rxjs/Subscription';

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
      .subscribe(_ => {
        const tasks = this.tasks;
        const index = tasks.findIndex(task => task.Id === taskId);

        tasks[index].Content = change.Content || tasks[index].Content;
        tasks[index].IsCompleted = change.IsCompleted || tasks[index].IsCompleted;
      });
  }

  removeTask(taskId) {}
}
