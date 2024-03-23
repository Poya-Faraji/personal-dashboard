import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { NotesComponent } from './components/notes/notes.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddNotesComponent } from './components/notes/add-notes/add-notes.component';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './components/todos/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './components/bookmarks/add-bookmark/add-bookmark.component';
import { ManageBookmarkComponent } from './components/bookmarks/manage-bookmark/manage-bookmark.component';
import { EditBookmarkComponent } from './components/bookmarks/edit-bookmark/edit-bookmark.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent },
  { path: 'bookmarks/add', component: AddBookmarkComponent },
  {
    path: 'bookmarks/manage',
    component: ManageBookmarkComponent,
    children: [{ path: ':id', component: EditBookmarkComponent }],
  },

  { path: 'notes', component: NotesComponent },
  { path: 'notes/add', component: AddNotesComponent },
  { path: 'notes/:id', component: EditNoteComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'todos/edit/:id', component: EditTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
