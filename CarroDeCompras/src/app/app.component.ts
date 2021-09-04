import { Component } from '@angular/core';
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

  constructor(productosService: ProductosService){
    //
    this.items = productosService.getAll();

  }


}
