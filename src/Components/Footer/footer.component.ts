import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer style="background-color: lightpink; padding: 10px; text-align: center;">
      <p>© 2024 Barbie's World. All rights reserved.</p>
    </footer>
  `,
})
export class FooterComponent {}
