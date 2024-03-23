import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {}

  notes: Note[] = [
    new Note('test Title 0 ', 'test content 0 '),
    new Note('test Title 1', 'test content 1'),
    new Note('test Title 2', 'test content 2'),
    new Note('test Title 3', 'test content 3'),
  ];

  getNotes() {
    return this.notes;
  }

  getNote(id: string | null) {
    return this.notes.find((n) => n.id === id);
  }

  addNote(note: Note) {
    this.notes?.push(note);
  }

  updateNote(id: string | null, updateField: Partial<Note>) {
    const note = this.getNote(id);
    if (note) {
      Object.assign(note, updateField);
    } else {
      console.error('Note with ID:', id, 'not found');
    }
  }

  deleteNote(id: string | null) {
    const noteIndex = this.notes?.findIndex((n) => n.id === id);
    this.notes?.splice(noteIndex, 1);
  }
}
