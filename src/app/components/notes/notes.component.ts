import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../shared/note.service';
import { note } from '../../shared/note.interface';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  notes: note[] | null = null;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }
}
