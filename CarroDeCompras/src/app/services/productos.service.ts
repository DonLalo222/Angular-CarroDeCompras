import { Injectable } from '@angular/core';
import * as data from '../data/productos.json';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productosTemp: any = [];
  productos: Array<Producto> = [];
  constructor() { 

    this.productosTemp = data;
    for(let item in this.productosTemp.items){
      let prod = {} as Producto;
      prod._id = this.productosTemp.items[item]._id;
      prod.description = this.productosTemp.items[item].description;
      prod.name = this.productosTemp.items[item].name;
      prod.picture = this.productosTemp.items[item].picture;
      prod.price = this.productosTemp.items[item].price;
      prod.stock = this.productosTemp.items[item].stock;
      //
      this.productos.push(prod);
    }

  }

  getAll(): Array<Producto>{
    return this.productos;
  }
}
