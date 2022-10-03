import { Component, Input } from '@angular/core';
import { TaskService } from './services/task.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-list-final';
  tarefas:any[]= [];//lista com os objetos

  constructor(private service: TaskService){}

  showTaskCreator!:boolean;
  grauOfCardToDisplay!:string;

  addTarefa(event:any){//evento com os objetos tarefas como parâmetro
    this.service.addTask(event)
    this.showTaskCreator = false;
  }
  setStatus(event:boolean){
    this.showTaskCreator = event;
  }
  grauToDisplay(event:string){
    this.grauOfCardToDisplay = event;
  }
}
