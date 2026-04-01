import { Component, signal } from '@angular/core';
import { TaskDetail } from '../task-detail/task-detail';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [TaskDetail, JsonPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = signal([
    { id: 1, title: 'Task 1', description: 'Description for Task 1' },
    { id: 2, title: 'Task 2', description: 'Description for Task 2' },
    { id: 3, title: 'Task 3', description: 'Description for Task 3' },
  ]);
  // Signal = reactive state container (no RxJS needed)
  selectedTask = signal<{ id: number; title: string } | null>(null);

  selectTask(task: { id: number; title: string }) {
    this.selectedTask.set(task);
  }

  onTaskCleared() {
    this.selectedTask.set(null);
  }
}
