export class Task {
  public taskId: number;
   public isCompleted: boolean;
   public dueDate: string;
   public name: string;
   public description: string;
   public static taskCounter = 1;
 
   constructor(isCompleted: boolean, dueDate: string, name: string, description: string) {
     this.taskId = Task.taskCounter;
     Task.taskCounter++;
     this.isCompleted = isCompleted;
     this.dueDate = dueDate;
     this.name = name;
     this.description = description;
   }
 }
 