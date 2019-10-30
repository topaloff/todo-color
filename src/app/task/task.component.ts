import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task:Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  setColor(color){
    this.taskService.setColor(this.task,color);
  }

}
