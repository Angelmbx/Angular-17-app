import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'games-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
    @for(game of games; track game.id) {
      <li> {{ game.name }} </li>
    }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  games = [
    {
      id: 1,
      name: 'Elden Ring'
    },
    {
      id: 2,
      name: 'NBA 2k24'
    },
    {
      id: 3,
      name: 'The Last of Us'
    },
  ]
  }

