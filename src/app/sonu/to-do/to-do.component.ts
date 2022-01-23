import { Component, OnInit } from '@angular/core';
import { todos} from "src/app/todo";
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todo:todos[]; 
  localItem: string | null;
  

  constructor() {
     this.localItem = localStorage.getItem('todos')

    if( this.localItem == null){

      this.todo=[];
    }
    else{
      this.todo = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:todos){
    console.log(todo);
    const index = this.todo.indexOf(todo);
    this.todo.splice(index, 1)
    localStorage.setItem("todos",JSON.stringify(this.todo));
  }
  addTodo(todo:todos){
    console.log(todo);
    this.todo.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todo));
  }
  toggleTodo(todo:todos){
    const index = this.todo.indexOf(todo);
    this.todo[index].active =!this.todo[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todo));
  }
}
