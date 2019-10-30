import { Injectable } from '@angular/core';
import { Task } from 'src/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [];
  constructor() { }

  getTasks() {
    return this.tasks;
  }
  addTask(f){
    this.tasks.push(new Task(f.form.value.title));
  }
  setColor(task,color){
    task.color = color;
  }
}
