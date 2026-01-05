import { Component } from '@angular/core';
import { ProductComponent } from '../product/product';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list-products.html',
  styleUrl: './list-products.css',
})
export class ListProducts {}
