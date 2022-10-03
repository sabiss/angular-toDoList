import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {
  private taskList!:string[];

  constructor() { }

  get tasks(){
    return this.taskList;
  }
  addTask(task:any){
    this.taskList.push(task)
  }
}

