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
  };
}
