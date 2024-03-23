import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../shared/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Note } from '../../../shared/note';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.scss',
})
export class EditNoteComponent implements OnInit {
  note: Note | undefined;
  id: string | null = this.route.snapshot.paramMap.get('id');
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert('Title is required');
    this.noteService.updateNote(this.id, form.value);
    this.router.navigateByUrl('/notes');
  }

  ngOnInit(): void {
    this.note = this.noteService.getNote(this.id);
  }

  deleteNote() {
    this.noteService.deleteNote(this.id);
    this.router.navigateByUrl('/notes');
  }
}
