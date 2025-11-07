import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'counter-app';
  count: number = 0;
  handleCounter = (val: string) => {
    if (val == 'minus') {
      this.count--;
    } else if (val == 'plus') {
      this.count++;
    } else {
      this.count = 0;
    }

  }
}
