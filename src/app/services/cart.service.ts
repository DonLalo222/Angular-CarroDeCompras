import { Injectable } from '@angular/core';
import { ProductSelected } from '../interfaces/product-selected';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Array<ProductSelected>;

  constructor() { this.products = [] }

  add(product: ProductSelected) {
    //
    let productFind = this.products.find((item) => item.id === product.id);
    //
    if(productFind){
      let index = this.products.indexOf(productFind);
      this.products[index].quantity += product.quantity;
      this.products[index].subtotal = this.products[index].price * this.products[index].quantity;
    }else{
      this.products.push(product);
    }
  }

  getCart(): Array<ProductSelected> {
    return this.products;
  }

  clear() {
    this.products.length = 0;
  }

  getProductsQuantity() {
    return this.products.reduce((acc, element) => acc + element.quantity, 0);

  }

  removeProductById(id: string){
    let productFind = this.products.find((item) => item.id === id);
    if(productFind){
      let index = this.products.indexOf(productFind);
      this.products.splice(index, 1);
    }
  }




}
