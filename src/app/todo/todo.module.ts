import { NgModule } from '@angular/core';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodolistComponent } from './todolist.component';
import { TodoService } from './todo.service';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TodoComponent,
    TodolistComponent
  ],
  imports: [
    TodoRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [TodoService],
  exports: [],
})
export class TodoModule { }
