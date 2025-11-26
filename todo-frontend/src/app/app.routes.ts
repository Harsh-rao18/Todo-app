import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list-component/todo-list-component';
import { TodoDetailComponent } from './components/todo-detail-component/todo-detail-component';

export const routes: Routes = [
    {path:'todos/:id',component:TodoDetailComponent},
    {path:'todos',component:TodoListComponent},
    {path:'',component:TodoListComponent},
    {path:'**',redirectTo:'/todos',pathMatch:'full'}
];
