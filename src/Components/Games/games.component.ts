import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  template: `
    <div>
      <h2>Barbie Games</h2>
      <ul>
        <li>Barbie Dress-Up</li>
        <li>Barbie Cooking</li>
        <li>Barbie Adventure</li>
      </ul>
    </div>
  `,
})
export class GamesComponent {}
