import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 md-line>
      {{title}}
    </h1>
    <app-task-capture></app-task-capture>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
