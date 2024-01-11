import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'games-component',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  template: `
    <div *ngIf="isLoggedIn">
    <h3>Últimos juegos jugados por {{ username }}</h3>
    <ul>
    @for(game of games; track game.id) {
      <li> {{ game.name }} </li>
    }
    </ul>
    </div>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Input() isLoggedIn = false;
  
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

