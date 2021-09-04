import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ng-fundamentals';
  ngTopics = {
    interpolation: 'string interpolation in angular',
    property: 'property binding in angular',
  };

  likeMsg?: string;
  like() {
    this.likeMsg = 'You just liked my app 😍. Thanks!';
  }

  count: number = 0;
  subscribe() {
    this.count++;
  }

  // animals = ['🐼', '🐯', '🐮', '🦍'];
}
