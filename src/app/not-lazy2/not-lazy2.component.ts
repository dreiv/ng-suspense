import { Component } from '@angular/core';

import { timer, Observable } from 'rxjs';
import { Suspenseable, useSuspense } from '../types';

@Component({
  selector: 'app-not-lazy2',
  templateUrl: './not-lazy2.component.html',
  providers: [useSuspense(NotLazy2Component)],
})
export class NotLazy2Component implements Suspenseable {
  setup(): Observable<number> {
    return timer(5000);
  }
}
