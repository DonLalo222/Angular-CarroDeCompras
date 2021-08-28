import { Injectable } from '@angular/core';
import * as data from '../data/productos.json';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  collection: Array<Producto> = data;
  constructor() { }

  getAll(): Array<Producto>{
    return this.collection;
  }
}
