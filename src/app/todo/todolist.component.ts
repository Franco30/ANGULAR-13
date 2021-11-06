import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todo!: Todo[];
  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.todoService.getEmployees().subscribe(
      (listTask) => {
        this.todo = listTask;
        console.log(listTask);
      },
      (err) => console.log(err)
      );

  }

  edit(todoId: number) {
    this.router.navigate(['/todo/edit', todoId]);
  }

  delete(todoId: number) {
    this.todoService.deleteTodo(todoId).subscribe(
      () => this.router.navigate(['todo']),
      (err: any) => console.log(err)
    );
    
    this.ngOnInit();
  }

}
