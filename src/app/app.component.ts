import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-root',
  imports: [CardComponent, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokeverse-UI';
}
