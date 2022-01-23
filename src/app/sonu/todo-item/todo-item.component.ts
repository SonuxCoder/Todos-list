import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { todos } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: todos = new todos;
  @Input()i!: number;
  @Output() todoDelete : EventEmitter<todos> = new EventEmitter();
  @Output() todoCheckbox : EventEmitter<todos> = new EventEmitter();


  constructor() { 
  }

  ngOnInit(): void {
  }
  onClick(todo:todos): void{
    this.todoDelete.emit(todo);
    console.log("on click triggered")
  }
  onCheckboxClick(todos: any){
    console.log(todos)
    this.todoCheckbox.emit(todos);
    console.log(todos)
    
  }

}
 