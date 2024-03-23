import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../shared/todos';
import { TodosService } from '../../../shared/todos.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss',
})
export class EditTodoComponent implements OnInit {
  todo: Todo | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodosService
  ) {}

  id: string | null = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.todo = this.todoService.getTodo(this.id);
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert('Content is Required');
    this.todoService.updateTodo(this.id, form.value);
    this.router.navigateByUrl('/todos');
  }
}
