import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bookmark } from './bookmark.inteface';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private http: HttpClient) {}

  bookmarksUrl = 'http://localhost:3000/bookmarks';

  getAllBookmarks() {
    return this.http.get<bookmark[]>(this.bookmarksUrl);
  }

  getSingeleBookMark(id: string | null) {
    return this.http.get<bookmark>(`${this.bookmarksUrl}/${id}`);
  }

  addToBookmarks(bookmark: bookmark) {
    return this.http.post(`${this.bookmarksUrl}`, bookmark);
  }

  updateBookmark(id: string | null, updatedField: bookmark) {
    return this.http.put(`${this.bookmarksUrl}/${id}`, updatedField);
  }

  deletBookmark(id: string | null) {
    return this.http.delete(`${this.bookmarksUrl}/${id}`);
  }
}
