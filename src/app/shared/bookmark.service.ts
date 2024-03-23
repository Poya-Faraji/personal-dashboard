import { Injectable } from '@angular/core';
import { Bookmark } from './bookmark';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmarks: Bookmark[] = [
    new Bookmark('Wikipedia', 'http://wikipedia.org'),
    new Bookmark('Google', 'http://google.com'),
    new Bookmark('Youtube', 'http://youtube.com'),
    new Bookmark('Twitter', 'http://twitter.com'),
    new Bookmark('Github', 'https://github.com/Poya-Faraji'),
  ];

  getAllBookmarks() {
    return this.bookmarks;
  }

  getSingeleBookMark(id: string | null) {
    return this.bookmarks.find((n) => n.id === id);
  }

  addToBookmarks(bookmark: Bookmark) {
    try {
      this.bookmarks.push(bookmark);
    } catch {
      alert("Failed to create and add bookmark. Make sure URL is Valid!")
    }
  }

  updateBookmark(id: string | null, updatedField: Partial<Bookmark>) {
    const bookmarks = this.getSingeleBookMark(id);
    if (bookmarks) {
      Object.assign(bookmarks, updatedField);
    } else {
      console.error("'bookmarks' value is unknown!");
    }
  }

  deletBookmark(id: string| null) {
    const bookmarkIndex = this.bookmarks.findIndex((n) => n.id === id);
    this.bookmarks.splice(bookmarkIndex, 1);
  }
}
