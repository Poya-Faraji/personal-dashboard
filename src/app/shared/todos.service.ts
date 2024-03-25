import { Injectable } from '@angular/core';
import { Todo } from './todos';
import { HttpClient } from '@angular/common/http';
import { todo } from './todo.inteface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}
  private todoUrl = 'http://localhost:3000/todos';

  getTodos() {
    return this.http.get<todo[]>(this.todoUrl);
  }

  getTodo(id: string | null) {
    return this.http.get<todo>(`${this.todoUrl}/${id}`);
  }

  addTodo(todo: string) {
    const newTodo = new Todo(todo);
    return this.http.post(`${this.todoUrl}`, newTodo);
  }

  updateTodo(id: string | null, updatedTodo: todo) {
    return this.http.put(`${this.todoUrl}/${id}`, updatedTodo);
  }

  deleteTodo(id: string) {
    return this.http.delete(`${this.todoUrl}/${id}`);
  }
}
