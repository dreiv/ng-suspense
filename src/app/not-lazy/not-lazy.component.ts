import { Component } from '@angular/core';
import { timer, Observable } from 'rxjs';

import { useSuspense, Suspenseable } from '../types';

@Component({
  selector: 'app-not-lazy',
  templateUrl: './not-lazy.component.html',
  providers: [useSuspense(NotLazyComponent)],
})
export class NotLazyComponent implements Suspenseable {
  setup(): Observable<number> {
    return timer(3000);
  }
}
