import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../shared/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { note } from '../../../shared/note.interface';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss',
})
export class EditNoteComponent implements OnInit {
  note: note | undefined;

  newNoteForm: note = {
    id: '',
    title: '',
    content: '',
  };

  id: string | null = this.route.snapshot.paramMap.get('id');
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert('Title is required');
    this.noteService.updateNote(this.id, this.newNoteForm).subscribe({
      next: () => {
        this.router.navigateByUrl('/notes');
      },
      error: (err) => {
        console.log('Failed to update!', err);
      },
    });
  }

  ngOnInit(): void {
    this.noteService.getNote(this.id).subscribe((res) => {
      this.note = res;
      this.newNoteForm = res;
    });
  }

  deleteNote() {
    this.noteService.deleteNote(this.id).subscribe({
      next: () => {
        this.router.navigateByUrl('/notes');
      },
      error: (err) => {
        console.log('Failed to delete!', err);
      },
    });
  }
}
