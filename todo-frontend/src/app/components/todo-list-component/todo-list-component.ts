import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../model/todo-model';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../service/todo-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-todo-list-component',
  standalone:true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todo-list-component.html',
  styleUrl: './todo-list-component.css',
})
export class TodoListComponent implements OnInit {

  todos:TodoModel[] = [];

  constructor(private todoService:TodoService){}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
    this.todoService.getTodosList().subscribe(
      data => {
        this.todos = data;
      }
    )
  };
}
