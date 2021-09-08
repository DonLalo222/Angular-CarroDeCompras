import { Component, Input } from '@angular/core';
import { Producto } from './interfaces/producto';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarroDeCompras';
  items: Array<Producto> = [];
  producto: Producto | undefined;

  constructor( private productosService: ProductosService){
    //
    this.items = this.productosService.getAll();
  }

  find(id: string){
    this.producto = this.productosService.find(id);
  }






}
