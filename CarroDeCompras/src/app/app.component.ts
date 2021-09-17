import { Component } from '@angular/core';
import { Product } from './interfaces/product';
import { ProductSelected } from './interfaces/product-selected';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';
import { NumberFormat } from "./utils/number-format";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carro De Compras';
  subtitle = 'ejemplo carro de compras Angular';
  cartLength: number = 0;
  constructor(private cartService: CartService) {
    //
    this.cartLength = this.cartService.getProductsQuantity();
  }






}
