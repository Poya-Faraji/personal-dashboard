import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../../shared/bookmark.service';
import { Bookmark } from '../../../shared/bookmark';

@Component({
  selector: 'app-manage-bookmark',
  templateUrl: './manage-bookmark.component.html',
  styleUrl: './manage-bookmark.component.scss',
})
export class ManageBookmarkComponent implements OnInit {
  bookmarks: Bookmark[] = [];
  constructor(private bookmarkService: BookmarkService) {}
  ngOnInit(): void {
    this.bookmarks = this.bookmarkService.getAllBookmarks();
  }
}
