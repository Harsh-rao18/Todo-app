import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { TodoListComponent } from './components/todo-list-component/todo-list-component';
import { TodoDetailComponent } from './components/todo-detail-component/todo-detail-component';
import { AddTodoComponent } from './components/add-todo-component/add-todo-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent, TodoDetailComponent, AddTodoComponent, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-frontend');
}
