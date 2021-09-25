import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>
    <img
      src="/assets/images/basic-shield.png"
      alt="angular basic shield image"
    />
  `,
})
export class AppComponent {
  title: string = 'ng-fundamentals';

  constructor() {}
}
