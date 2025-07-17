import { Pipe, PipeTransform } from '@angular/core';
import { IProducto } from '../modelo/IProducto';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(productos: IProducto[], texto: string = ''): IProducto[] {
    if (!texto) return productos;
    texto = texto.toLowerCase();

    return productos.filter(producto =>
      producto.marca.toLowerCase().includes(texto) ||
      producto.precio.toString().includes(texto)
    );
  }

}
