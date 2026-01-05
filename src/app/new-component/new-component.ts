import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.html',
  styleUrl: './new-component.css',
})
export class NewComponent {
  titleNewComponent = 'nuevo componente';
}
