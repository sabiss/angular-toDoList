import { Component, Input, OnInit} from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-window',
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.scss']
})
export class TaskWindowComponent implements OnInit {
  @Input() grauOfCardToDisplay!:string;
  taskList!:any[];

  constructor(private service: TaskService) {
  }

  closeCard(event:string){
    this.taskList.splice(this.taskList.indexOf(event), 1);
  }
  checkedTask(event:string){
    const index = this.taskList.indexOf(event);
    this.taskList[index].grau = "done";
  }
  filterTheList(){
    if(this.grauOfCardToDisplay){
      return this.taskList.filter(tarefa => tarefa.grau == this.grauOfCardToDisplay);
    }
    return this.taskList;

  }

  ngOnInit(): void {
    this.taskList = this.service.tasks;
  }

}
