import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-task-creator',
  templateUrl: './task-creator.component.html',
  styleUrls: ['./task-creator.component.scss']
})
export class TaskCreatorComponent implements OnInit {
  @Output() aoCriarTarefa = new EventEmitter<any>();
  @Output() onCloseTask = new EventEmitter<boolean>();

  tituloTarefa!:string;
  opcaoGrau!:string;

  listaGrau = [{name: "Urgente", value: "urgent"}, {name: "Moderado", value:"moderate"}, {name: "Pode Esperar", value:"itCanWait"}];

  constructor() {}

  criarTarefa(){
    this.aoCriarTarefa.emit({tarefa: this.tituloTarefa, grau: this.opcaoGrau});
  }

  close(){
    this.onCloseTask.emit(false);
  }

  ngOnInit(): void {
  }
}
