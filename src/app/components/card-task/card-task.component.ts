import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent implements OnInit {
  @Input() tarefa!:any;
  @Input() grauOfCardToDisplay!:string;
  @Output() onCloseTask = new EventEmitter<string>();
  @Output() onCheck = new EventEmitter<string>();

  constructor() {
  }

  goToTrash(item:string){
    this.onCloseTask.emit(item)//passa a tarefa específica
  }
  checked(item:string){
    this.onCheck.emit(item)
  }
  ngOnInit(): void {

  }

}
