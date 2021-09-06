import { Injectable } from '@angular/core';
import * as data from '../data/productos.json';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Array<Producto> = [];

  constructor() {

    let productosTemp: any = data;
    //
    for(let item in productosTemp.items){
      let prod = {} as Producto;

      prod._id = productosTemp.items[item]._id;
      prod.description = productosTemp.items[item].description;
      prod.name = productosTemp.items[item].name;
      prod.picture = productosTemp.items[item].picture;
      prod.price = productosTemp.items[item].price;
      prod.stock = productosTemp.items[item].stock;
      //
      this.productos.push(prod);
    }

  }

  getAll(): Array<Producto>{
    return this.productos;
  }

  find(id: string){
    let producto: Producto | undefined;
    this.productos.forEach((p: Producto) =>{
      if(p._id === id){
        producto = p;
      }
    });
    return producto;
  }
}
