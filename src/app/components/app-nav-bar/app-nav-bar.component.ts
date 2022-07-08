import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-nav-bar',
  templateUrl: './app-nav-bar.component.html',
  styleUrls: ['./app-nav-bar.component.scss']
})
export class AppNavBarComponent implements OnInit {
  @Output() statusCreator = new EventEmitter<any>();
  @Output() displayOnlyThatCards = new EventEmitter<string>();

  showCreator(){
    this.statusCreator.emit(true);
  }
  displayOnly(grau?:string){//?--> parâmetro opcional
    console.log("clicou")
    this.displayOnlyThatCards.emit(grau);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
