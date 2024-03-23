import { Injectable } from '@angular/core';
import { Todo } from './todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {}

  todos: Todo[] = [
    new Todo('This is Test'),
    new Todo(
      'This is Also a Test but 2 This is Also a Test but 2This is Also a Test but 2This is Also a Test but 2This is Also a Test but 2'
    ),
  ];

  getTodos() {
    return this.todos;
  }

  // accessing each one
  getTodo(id: string | null) {
    return this.todos.find((n) => n.id === id);
  }

  // adding to Todo List
  addTodo(todo: string) {
    const newTodo = new Todo(todo);
    this.todos.push(newTodo);
  }

  updateTodo(id: string | null, updatedTodoField: Partial<Todo>) {
    const todo = this.getTodo(id);
    if (todo) {
      Object.assign(todo, updatedTodoField);
    } else {
      console.error("'todo' value is unknown!");
    }
  }

  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex((n) => n.id === id);
    this.todos.splice(todoIndex, 1);
  }
}
