import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail {
  // Input -> this is data from parent! 
  @Input() task: { id: number; title: string } | null = null;
  // Output -> sending this event to the parent! 
  @Output() clearTask = new EventEmitter<void>();

  clearSelectedTask() {
    this.clearTask.emit();
  }
}
