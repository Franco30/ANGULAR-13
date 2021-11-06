import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  selectedTodo!: Todo;
  todo!: Todo[];

  readonly baseURL = 'http://localhost:3000/todo';

  getEmployees(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseURL).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError(
      'There is a problem with the service. We are notified & working on it. Please try again later.'
    );
  }

  postTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.baseURL, todo, {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    })
    .pipe(catchError(this.handleError));
}

  getTodoList() {
    return this.http.get(this.baseURL);
  }

  getEmployee(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.baseURL}/${id}`);
  }

  putTodo(todo: Todo) {
    return this.http.put(this.baseURL + `/${todo.id}`, todo);
  }

  deleteTodo(_id: number) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
