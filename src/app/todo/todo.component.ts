import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { TodoService } from './todo.service';
import { Todo } from './todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;

  todo!: Todo;

  pageTitle!: string;

  constructor(
    private todoService: TodoService, 
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {

    this.initTodoForm(); 

    this.todoForm.valueChanges.subscribe((data) => {
      return this.todoForm.controls;
    });

    this.route.paramMap.subscribe(params => {
      const todoId = +params.get('id')!;
      if (todoId) {
        this.getEmployee(todoId);
        this.pageTitle = 'Edit Todo';
      } else {
        this.todo = {
          id: 0,
          task: '',
        };
        this.pageTitle = 'Create Todo';
      }
    });

  }

  get t() {
    return this.todoForm.controls;
  }

  initTodoForm() {
    this.todoForm = this.fb.group({
      task: ['', Validators.required],
    });
  }

  clearForm() {

  }

  
  getEmployee(id: number) {
    this.todoService.getEmployee(id)
      .subscribe(
        (todo: Todo) => {
          this.todo = todo;
          this.editTodo(todo);
          console.log(id, todo);
        },
        (err: any) => console.log(err)
      );
  }

  editTodo(todo: Todo) {
    this.todoForm.patchValue({
      task: todo.task
    });
  }

  onSubmit(): void {

    this.mapFormValuesToTodoModel();

    if (this.todo.id) {
        this.todoService.putTodo(this.todo).subscribe(
          () => this.router.navigate(['todo']),
          (err: any) => console.log(err)
        );
    } else {
      this.todoService.postTodo(this.todo).subscribe(
        () => this.router.navigate(['todo']),
        (err: any) => console.log(err)
      );
         console.log(this.todo.id);
    }

  }

  mapFormValuesToTodoModel() {
    this.todo.task = this.todoForm.value.task;
  }

}
