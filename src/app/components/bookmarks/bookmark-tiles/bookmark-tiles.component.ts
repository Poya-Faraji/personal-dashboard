import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../../../shared/bookmark';

@Component({
  selector: 'app-bookmark-tiles',
  templateUrl: './bookmark-tiles.component.html',
  styleUrl: './bookmark-tiles.component.scss',
})
export class BookmarkTilesComponent implements OnInit {
  @Input() bookmark: Bookmark | null = null;
  bookmarkFavIcon: string = '';

  ngOnInit(): void {
    if (this.bookmark) {
      this.bookmarkFavIcon = this.bookmark.url.origin + '/favicon.ico';
    }
  }
}
