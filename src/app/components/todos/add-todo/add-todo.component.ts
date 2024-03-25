import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodosService } from '../../../shared/todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  constructor(private todoService: TodosService, private router: Router) {}

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert('Todo Can not be empty !');

    this.todoService.addTodo(form.value.content).subscribe({
      next: () => {
        this.router.navigateByUrl('/todos');
      },
      error: (err) => {
        console.log('Failed Adding Todo: ', err);
      },
    });
  }
}
