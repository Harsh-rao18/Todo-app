import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list-component/todo-list-component';
import { TodoDetailComponent } from './components/todo-detail-component/todo-detail-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TodoListComponent,TodoDetailComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-frontend');
}
