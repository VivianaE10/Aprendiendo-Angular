import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css',
})
export class InterpolacionComponent {
  title = 'Universidad angular';
  user = {
    name: 'viviana ospina',
    age: 36,
  };

  saludar() {
    return `Hola, ${this.user.name}`;
  }
}
