import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-evento',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-evento.html',
  styleUrl: './mostrar-evento.css',
})
export class MostrarEvento {
  mostrarMensaje() {
    alert('Mensaje mostrado');
  }
}
