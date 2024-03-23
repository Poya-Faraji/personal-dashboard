import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../shared/note.service';
import { Note } from '../../shared/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss',
})
export class NotesComponent implements OnInit {
  notes: Note[] | null = null;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }
}
