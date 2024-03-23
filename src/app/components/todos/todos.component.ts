import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../shared/todos.service';
import { Todo } from '../../shared/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  todos: Todo[] = [];

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  toggleCompleted(todo: Todo) {
    this.todosService.updateTodo(todo.id, { isComplete: !todo.isComplete });
  }

  onDeletClicked(todo: Todo) {
    this.todosService.deleteTodo(todo.id);
  }
}
