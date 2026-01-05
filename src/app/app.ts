import { ProductComponent } from './product/product';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion';
import { ListProducts } from './list-products/list-products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacionComponent, ProductComponent, ListProducts],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Tienda online');
}
