import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { TodolistComponent } from './todolist.component';

const routes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'create', component: TodoComponent },
  { path: 'edit/:id', component: TodoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
