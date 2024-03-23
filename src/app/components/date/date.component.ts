import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss',
})
export class DateComponent implements OnInit {
  clock: Date | null = null;
  date: Date | null = null;

  ngOnInit(): void {
    this.clock = new Date();
    this.date = new Date();
    interval(1000) // Update every 60 seconds
      .subscribe(() => {
        this.clock = new Date();
      });
  }
}
