import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DateComponent } from './components/date/date.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { TodosComponent } from './components/todos/todos.component';
import { NotesComponent } from './components/notes/notes.component';
import { BookmarkTilesComponent } from './components/bookmarks/bookmark-tiles/bookmark-tiles.component';
import { AddNotesComponent } from './components/notes/add-notes/add-notes.component';
import { NoteCardComponent } from './components/notes/note-card/note-card.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './components/notes/edit-note/edit-note.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { AddTodoComponent } from './components/todos/add-todo/add-todo.component';
import { EditTodoComponent } from './components/todos/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './components/bookmarks/add-bookmark/add-bookmark.component';
import { ManageBookmarkComponent } from './components/bookmarks/manage-bookmark/manage-bookmark.component';
import { EditBookmarkComponent } from './components/bookmarks/edit-bookmark/edit-bookmark.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    DateComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTilesComponent,
    AddNotesComponent,
    NoteCardComponent,
    EditNoteComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarkComponent,
    EditBookmarkComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
