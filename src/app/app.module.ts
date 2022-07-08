import { NgModule, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { TaskWindowComponent } from './components/task-window/task-window.component';
import { CardTaskComponent } from './components/card-task/card-task.component';
import { TaskCreatorComponent } from './components/task-creator/task-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    TaskWindowComponent,
    CardTaskComponent,
    TaskCreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
