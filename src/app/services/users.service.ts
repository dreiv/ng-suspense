import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.users$ = this.http
    .get<any[]>('https://jsonplaceholder.typicode.com/users')
    .pipe(
      delay(2000),
      map(res => {
        if (Math.random() < 0.6) {
          throw new Error('Error loading users');
        }

        return res;
      })
    );
  }
}
