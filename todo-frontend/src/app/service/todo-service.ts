import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoModel } from '../model/todo-model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  
  private baseUrl = "http://localhost:8080/api/todos";

  constructor(private httpClient:HttpClient){}

  getTodosList():Observable<TodoModel[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.todos)
    )
  }
}

interface GetResponse{
  _embedded:{
    todos:TodoModel[]
  }
}
