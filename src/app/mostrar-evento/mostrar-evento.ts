import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-evento',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-evento.html',
  styleUrl: './mostrar-evento.css',
})
export class MostrarEvento {
  mensaje: string = '';

  resetearMensaje() {
    this.mensaje = '';
  }
  mostrarMensaje() {
    this.mensaje = '¡Hola has echo click en el boton';
  }
}
