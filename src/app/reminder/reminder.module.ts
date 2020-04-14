import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RemindersListComponent } from './reminders-list/reminders-list.component';



@NgModule({
  declarations: [RemindersListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'reminders', component: RemindersListComponent }
    ])
  ]
})
export class ReminderModule { }
