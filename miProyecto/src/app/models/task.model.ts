export class Task {
   public isCompleted: boolean;
   public dueDate: string;
   public name: string;
   public description: string;
 
   constructor(isCompleted: boolean, dueDate: string, name: string, description: string) {
     this.isCompleted = isCompleted;
     this.dueDate = dueDate;
     this.name = name;
     this.description = description;
   }
 }
 