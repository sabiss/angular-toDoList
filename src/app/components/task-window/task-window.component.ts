import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-window',
  templateUrl: './task-window.component.html',
  styleUrls: ['./task-window.component.scss']
})
export class TaskWindowComponent implements OnInit {
  @Input() listaTarefas!:any[];
  @Input() grauOfCardToDisplay!:string;

  roundsCounter:number = 0;

  closeCard(event:string){
    this.listaTarefas.splice(this.listaTarefas.indexOf(event), 1);
  }
  checkedTask(event:string){
    const index = this.listaTarefas.indexOf(event);
    this.listaTarefas[index].grau = "done";
  }
  filterTheList(){
    if(this.grauOfCardToDisplay){
      return this.listaTarefas.filter(tarefa => tarefa.grau == this.grauOfCardToDisplay);
    }
    return this.listaTarefas;

  }
  constructor() {
   }

  ngOnInit(): void {
  }

}
