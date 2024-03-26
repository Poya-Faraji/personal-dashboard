import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../../shared/bookmark.service';
import { bookmark } from '../../../shared/bookmark.inteface';

@Component({
  selector: 'app-manage-bookmark',
  templateUrl: './manage-bookmark.component.html',
  styleUrl: './manage-bookmark.component.scss',
})
export class ManageBookmarkComponent implements OnInit {
  bookmarks: bookmark[] = [];
  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    this.bookmarkService.getAllBookmarks().subscribe((data) => {
      this.bookmarks = data;
    });
  }
}
