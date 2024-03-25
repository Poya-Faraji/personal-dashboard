import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { note } from './note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}
  private notesURL = 'http://localhost:3000/notes';

  getNotes() {
    return this.http.get<note[]>(this.notesURL);
  }

  getNote(id: string | null) {
    return this.http.get<note>(`${this.notesURL}/${id}`);
  }

  addNote(note: note) {
    return this.http.post(`${this.notesURL}`, note);
  }

  updateNote(id: string | null, newTodo: note) {
    return this.http.put(`${this.notesURL}/${id}`, newTodo);
  }

  deleteNote(id: string | null) {
    return this.http.delete(`${this.notesURL}/${id}`);
  }
}
