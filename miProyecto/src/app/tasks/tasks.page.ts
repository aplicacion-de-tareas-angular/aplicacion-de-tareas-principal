import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks: Task[]=[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks=this.taskService.getTasks();
  }

}
