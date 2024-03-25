import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../../../shared/todos';
import { TodosService } from '../../../shared/todos.service';
import { todo } from '../../../shared/todo.inteface';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.scss',
})
export class EditTodoComponent implements OnInit {
  id: string | null = this.route.snapshot.paramMap.get('id');

  newFormTodo: todo = {
    id: '',
    isComplete: false,
    content: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodosService
  ) {}

  ngOnInit(): void {
    this.todoService.getTodo(this.id).subscribe((data) => {
      this.newFormTodo = data;
    });
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert('Content is Required');
    this.todoService.updateTodo(this.id, this.newFormTodo).subscribe({
      next: () => {
        this.router.navigateByUrl('/todos');
      },
      error: (err) => {
        console.log('Error Updating Todo', err);
      },
    });
  }
}
