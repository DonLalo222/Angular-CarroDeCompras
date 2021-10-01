import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { NumberFormat } from 'src/app/utils/number-format';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = 'Product list';
  subtitle = 'Add To Cart';
  products: Array<Product> = [];
  productDetails: Product | undefined;
  cartLength: number = 0;
  private numberFormat = new NumberFormat();

  constructor( private productService: ProductService, private cartService: CartService){
    //
    this.products = this.productService.getAll();
    this.cartLength = this.cartService.getProductsQuantity();
  }

  findById(id: string){
    this.productDetails = this.productService.findById(id);
  }

  addProductCart(id: string, quantity: string){
    let selected = this.productService.findById(id);

    if(selected){
      let formatedPrice = Number(this.numberFormat.removeNoNumericFormat(selected.price));
      //
      this.cartService.add({
        id: selected._id,
        quantity: Number(quantity),
        price: formatedPrice,
        name: selected.name,
        subtotal: formatedPrice * Number(quantity)
      });
    }
    //
    this.cartLength = this.cartService.getProductsQuantity();
  }

  ngOnInit(): void {
  }

}
