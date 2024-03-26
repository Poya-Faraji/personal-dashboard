import { Component, Input, OnInit } from '@angular/core';
import { bookmark } from '../../../shared/bookmark.inteface';

@Component({
  selector: 'app-bookmark-tiles',
  templateUrl: './bookmark-tiles.component.html',
  styleUrl: './bookmark-tiles.component.scss',
})
export class BookmarkTilesComponent implements OnInit {
  @Input() bookmark: bookmark | null = null;
  bookmarkFavIcon: string = '';
  bookmarkURL?: URL;
  ngOnInit(): void {
    if (this.bookmark) {
      this.bookmarkURL = new URL(this.bookmark.url);
      this.bookmarkFavIcon = this.bookmarkURL.origin + '/favicon.ico';
    }
  }
}
