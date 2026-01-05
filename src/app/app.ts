import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacionComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Tienda online');
}
