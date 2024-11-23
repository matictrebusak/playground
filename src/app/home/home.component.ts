import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  name = signal('AA');

  changeName() {
    this.name.update((nameToChange) => (nameToChange === 'AA' ? 'BB' : 'AA'));
  }
}
