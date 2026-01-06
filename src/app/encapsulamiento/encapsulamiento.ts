import { Component } from '@angular/core';

@Component({
  selector: 'app-encapsulamiento',
  standalone: true,
  imports: [],
  templateUrl: './encapsulamiento.html',
  styleUrl: './encapsulamiento.css',
})
export class EncapsulamientoComponent {
  private title = 'Titulo del componente encapsulamiento';

  //getter de typeScrit

  get mostarTitulo() {
    return this.title;
  }

  //metodo regular

  getTitulo() {
    return this.title;
  }
}
