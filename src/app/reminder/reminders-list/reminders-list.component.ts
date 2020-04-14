import { Component, OnInit } from '@angular/core';

import { IReminder } from '../reminder';
import { ReminderService } from '../reminder.service';

@Component({
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.css']
})
export class RemindersListComponent implements OnInit {
  pageTitle: string = 'Reminder List';
  showContent: boolean = false;
  errorMessage: string;

  filteredReminders: IReminder[];
  reminders: IReminder[];

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredReminders = this.listFilter ? this.performFilter(this.listFilter) : this.reminders
  }


  constructor(private reminderService: ReminderService) { }

  performFilter(filterBy: string): IReminder[]{
    filterBy = filterBy.toLowerCase();
    return this.reminders.filter((product: IReminder) =>
          product.subject.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleContent(): void {
    this.showContent = !this.showContent
  }

  ngOnInit(): void {
    this.reminderService.getReminders().subscribe({
      next: reminders => {
        this.reminders = reminders;
        this.filteredReminders = this.reminders;
      },
      error: err => this.errorMessage = err
    });  
  }

}
