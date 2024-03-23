import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../shared/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo: Todo | null = null;

  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  onDeleteClicked() {
    this.deleteClicked.emit();
  }
}
