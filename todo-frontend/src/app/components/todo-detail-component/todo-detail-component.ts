import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../../model/todo-model';
import { TodoService } from '../../service/todo-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-detail-component',
  standalone:true,
  imports: [RouterLink,CommonModule],
  templateUrl: './todo-detail-component.html',
  styleUrl: './todo-detail-component.css',
})
export class TodoDetailComponent implements OnInit {

  todo!:TodoModel;

  constructor(private todoService:TodoService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( () =>{
      this.handleTodoDetail();
    }

    );
  }
  handleTodoDetail() {
    const theTodoId:number = +this.route.snapshot.paramMap.get('id')!;
    this.todoService.getTodo(theTodoId).subscribe(
      data => {
        this.todo = data;
      }
    )
  }
}
