import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tap, delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UsersService } from '../services/users.service';
import { Suspenseable } from '../types';

@Component({
  selector: 'app-test',
  template: `
    <h4>Users</h4>
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `,
})
export default class UsersComponent implements Suspenseable {
  users: any[] = [];
  constructor(private userService: UsersService) {}

  setup(): Observable<any[]> {
    return this.userService.users$
      .pipe(tap((users) => (this.users = users)));
  }
}

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule],
})
export class TestModule {}
