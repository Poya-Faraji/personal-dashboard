import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookmarkService } from '../../../shared/bookmark.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { bookmark } from '../../../shared/bookmark.inteface';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrl: './edit-bookmark.component.scss',
})
export class EditBookmarkComponent implements OnInit {
  newBookMarkForm: bookmark = {
    id: '',
    name: '',
    url: '',
  };

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  urlRegex: RegExp =
    /^(http|https):\/\/[\w.-]+\.[a-zA-Z]{2,6}(?:\/[\w.-]*)*\/?$/;
  bookmarkID: string | null = null;
  ngOnInit(): void {
    this.route.paramMap.subscribe((paraMap: ParamMap) => {
      this.bookmarkID = paraMap.get('id');
      this.bookmarkService
        .getSingeleBookMark(this.bookmarkID)
        .subscribe((data) => {
          this.newBookMarkForm = data;
        });
    });
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return alert("You need to Enter a 'url' !");
    const enteredUrl = form.value.url;
    if (!this.urlRegex.test(enteredUrl)) {
      return alert(
        'Invalid URL format. Please enter a valid URL starting with http:// or https://'
      );
    }

    this.bookmarkService
      .updateBookmark(this.bookmarkID, this.newBookMarkForm)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/bookmarks');
        },
      });
  }

  onClickDeleteBookmark() {
    this.bookmarkService.deletBookmark(this.bookmarkID).subscribe({
      next: () => {
        this.router.navigateByUrl('/bookmarks');
      },
      error: (err) => {
        console.log('Error Deleting Bookamkr:', err);
      },
    });
  }
}
