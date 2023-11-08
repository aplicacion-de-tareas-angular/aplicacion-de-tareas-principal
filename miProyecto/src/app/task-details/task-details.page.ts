import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms'; // Asegúrate de que los módulos necesarios estén importados aquí
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  taskId: number = 0;
  taskForm: FormGroup; // No se inicializa a null

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {
    this.taskForm = this.formBuilder.group({
      name: [''],
      description: [''],
      dueDate: [''],
      isCompleted: [false],
    });
  }

  ngOnInit() {
    this.taskId = +this.activatedRoute.snapshot.paramMap.get('taskId')!;
    const task = this.taskService.getTaskById(this.taskId);

    if (task) {
      this.taskForm.patchValue({
        name: task.name,
        description: task.description,
        dueDate: task.dueDate,
        isCompleted: task.isCompleted,
      });
    }
  }
}
