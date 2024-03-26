import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../shared/todos.service';
import { Todo } from '../../shared/todos';
import { todo } from '../../shared/todo.inteface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  todos: todo[] = [];

  ngOnInit(): void {
    this.todosService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  toggleCompleted(todo: Todo) {
    todo.isComplete = !todo.isComplete;
    this.todosService.updateTodo(todo.id, todo).subscribe();
  }

  onDeletClicked(todo: Todo) {
    this.todosService.deleteTodo(todo.id).subscribe({
      next: () => {
        this.todosService.getTodos().subscribe((data) => {
          this.todos = data;
        });
      },
    });
  }
}
