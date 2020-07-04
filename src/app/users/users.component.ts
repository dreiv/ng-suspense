import { Component, NgModule } from '@angular/core';
import { Suspenseable } from '../types';
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

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
  constructor(private http: HttpClient) {}

  setup(): Observable<any[]> {
    return this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(2000),
        tap((users) => (this.users = users))
      );
  }
}

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule],
})
export class TestModule {}
