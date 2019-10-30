import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(){
    this.tasks = this.taskService.getTasks();
  }

  getColor(color){
    this.getTasks();
    this.tasks = this.tasks.filter(task => task.color == color);
  }

}
