import { Component } from '@angular/core';
import { TopicsService } from './topics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'ng-fundamentals';

  constructor(public topics: TopicsService) {}
}
