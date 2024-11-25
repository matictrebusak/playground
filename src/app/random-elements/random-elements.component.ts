import { Component } from '@angular/core';
import { MatCard, MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'app-random-elements',
  standalone: true,
  imports: [MatCard, MatCardHeader],
  templateUrl: './random-elements.component.html',
  styleUrl: './random-elements.component.scss',
})
export default class RandomElementsComponent {}
