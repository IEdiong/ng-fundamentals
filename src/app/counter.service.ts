import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  likeMsg?: string;
  like() {
    this.likeMsg = 'You just liked my app 😍. Thanks!';
  }

  count: number = 0;
  subscribe() {
    this.count++;
  }
}
