import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    new Task(false, "30-10-2023", 'Centrar div', 'Descripción de la tarea 1'),
    new Task(true, "29-10-2023", 'Configurar servidor', 'Descripción de la tarea 2'),
    new Task(false, "01-11-2023", 'Constructor de UserService', 'Descripción de la tarea 3'),
    new Task(true, "03-11-2023", 'Testear Usuarios', 'Descripción de la tarea 4')
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.taskId === id);
  }

  constructor() { }
}
