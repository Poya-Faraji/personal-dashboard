import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../../../shared/note';
import { NoteService } from '../../../shared/note.service';
import { Router } from '@angular/router';
import { note } from '../../../shared/note.interface';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrl: './add-notes.component.scss',
})
export class AddNotesComponent {
  constructor(private noteService: NoteService, private router: Router) {}

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert('Title is required');
    const note: note = new Note(form.value.title, form.value.content);
    this.noteService.addNote(note).subscribe({
      next: () => {
        this.router.navigateByUrl('/notes');
      },
      error: (err) => {
        console.log('Failed to add to notes!', err);
      },
    });
  }
}
