import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list-component/todo-list-component';
import { TodoDetailComponent } from './components/todo-detail-component/todo-detail-component';
import { AddTodoComponent } from './components/add-todo-component/add-todo-component';

export const routes: Routes = [
    {path:'todos/:id',component:TodoDetailComponent},
    {path:'todos',component:TodoListComponent},
    {path:'add-todo',component:AddTodoComponent},
    {path:'',component:TodoListComponent},
    {path:'**',redirectTo:'/todos',pathMatch:'full'}
];
