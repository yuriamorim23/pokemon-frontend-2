import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainGameComponent } from './components/main-game/main-game.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon-frontend';
}
