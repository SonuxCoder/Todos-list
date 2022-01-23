import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToDoComponent } from './sonu/to-do/to-do.component';
import { TodoItemComponent } from './sonu/todo-item/todo-item.component';
import { AddTodoComponent } from './sonu/add-todo/add-todo.component';
@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    TodoItemComponent,
    AddTodoComponent
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
