import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BuscarPipe } from '../../pipes/buscar-pipe';
import { IProducto } from '../../modelo/IProducto';


@Component({
  selector: 'app-producto',
  imports: [CommonModule,FormsModule,BuscarPipe],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {
  filtro: string = '';

  productos: IProducto[] = [
    {
      id: 1,
      nombre: 'Nike Air Max',
      marca: 'Nike',
      modelo: 'Air Max',
      precio: 450,
      imagen: 'https://media.falabella.com/falabellaPE/138247325_01/w=1500,h=1500,fit=pad',
      stock: 10
    },
    {
      id: 2,
      nombre: 'Adidas Ultraboost',
      marca: 'Adidas',
      modelo: 'UltraBoost',
      precio: 400,
      imagen: 'https://media.falabella.com/falabellaPE/21023250_2/w=1500,h=1500,fit=pad',
      stock: 5
    },
    {
      id: 3,
      nombre: 'Puma Future Rider',
      marca: 'Puma',
      modelo: 'Future',
      precio: 320,
      imagen: 'https://media.falabella.com/falabellaPE/142789402_05/w=1500,h=1500,fit=pad',
      stock: 8
    }
  ];
}
