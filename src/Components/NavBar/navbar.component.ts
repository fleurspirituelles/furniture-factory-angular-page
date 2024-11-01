import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav style="background-color: pink; padding: 10px;">
      <h1>Hi, Barbie!</h1>
    </nav>
  `,
})
export class NavbarComponent {}
