import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookmarkService } from '../../../shared/bookmark.service';
import { Router } from '@angular/router';
import { Bookmark } from '../../../shared/bookmark';
import { bookmark } from '../../../shared/bookmark.inteface';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrl: './add-bookmark.component.scss',
})
export class AddBookmarkComponent {
  constructor(
    private bookmarkService: BookmarkService,
    private router: Router
  ) {}

  urlRegex: RegExp =
    /^(http|https):\/\/[\w.-]+\.[a-zA-Z]{2,6}(?:\/[\w.-]*)*\/?$/;

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert("You need to Enter a 'url' !");
    const enteredUrl = form.value.url;
    if (!this.urlRegex.test(enteredUrl)) {
      alert(
        'Invalid URL format. Please enter a valid URL starting with http:// or https://'
      );
      return;
    }
    const newBookmark: bookmark = new Bookmark(
      form.value.title,
      form.value.url
    );
    this.bookmarkService.addToBookmarks(newBookmark).subscribe({
      next: () => {
        this.router.navigateByUrl('/bookmarks');
      },
      error: (err) => {
        console.log('Error adding bookmark: ', err);
      },
    });
  }
}
