import { Component, Input } from '@angular/core';
import { note } from '../../../shared/note.interface';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss',
})
export class NoteCardComponent {
  @Input() note: note | null = null;
}
