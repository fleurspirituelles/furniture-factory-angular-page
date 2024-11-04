import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<h1>Hello from the {{ name }}!</h1>`,
})

export class App {
  name = 'Furniture Store';
}

bootstrapApplication(App);