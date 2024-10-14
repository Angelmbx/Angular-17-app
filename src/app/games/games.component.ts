import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'games-component',
  standalone: true,
  imports: [CommonModule, GamesComponent],
  template: `
    <div *ngIf="isLoggedIn">
    <h3>Últimos juegos jugados por <span>{{ username }}</span></h3>
    <ul>
    @for(game of games; track game.id) {
      <li> {{ game.name }} </li>
    }
    </ul>
    </div>
    <img class="cat" *ngIf="isLoggedIn" src="https://media.tenor.com/a8a1J3g3bYkAAAAi/kawaii-cute.gif" alt="Gaming cat gif"/>
  `,
  styleUrl: './games.component.css'
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

