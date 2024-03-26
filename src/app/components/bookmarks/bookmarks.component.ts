import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../shared/bookmark.service';
import { bookmark } from '../../shared/bookmark.inteface';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss',
})
export class BookmarksComponent implements OnInit {
  bookmarks: bookmark[] = [];

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.bookmarkService.getAllBookmarks().subscribe((data) => {
      this.bookmarks = data;
    });
  }
}
