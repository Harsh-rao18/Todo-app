import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../model/todo-model';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TodoService } from '../../service/todo-service';

@Component({
  selector: 'app-todo-list-component',
  imports: [CommonModule,RouterLink],
  templateUrl: './todo-list-component.html',
  styleUrl: './todo-list-component.css',
})
export class TodoListComponent implements OnInit {

  todos:TodoModel[] = [];

  constructor(private todoService:TodoService,private route:ActivatedRoute){}

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
