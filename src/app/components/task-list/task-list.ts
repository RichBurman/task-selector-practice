import { Component } from '@angular/core';
import { TaskDetail } from '../task-detail/task-detail';

@Component({
  selector: 'app-task-list',
  imports: [TaskDetail],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

}
