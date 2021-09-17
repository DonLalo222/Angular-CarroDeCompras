import { Component, OnInit } from '@angular/core';
import { ProductSelected } from 'src/app/interfaces/product-selected';
import { ProductSelectedFormated } from 'src/app/interfaces/product-selected-formated';
import { CartService } from 'src/app/services/cart.service';
import { NumberFormat } from 'src/app/utils/number-format';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  title: string = 'Carro de Compras';
  subtitle: string = 'Detalles';
  //
  cartLength: number = 0;
  list: Array<ProductSelected> = [];
  listFormated: Array<ProductSelectedFormated> = [];
  private numberFormat = new NumberFormat();
  total: string = '';
  //
  constructor(private cartService: CartService) {
    this.updateData();
  }

  ngOnInit(): void {
  }

  cartFormated(listNoFormated: Array<ProductSelected>){
    this.listFormated.length = 0;
    listNoFormated.map((element) =>
      this.listFormated.push({
        id: element.id,
        name: element.name,
        price: this.numberFormat.currencyFormat(element.price),
        quantity: element.quantity,
        subtotal: this.numberFormat.currencyFormat(element.subtotal),
      })
    );
  }

  getTotalFormated(): string {
    let totalNoFormated = this.list.reduce(
      (acc, element) => acc + element.subtotal,
      0
    );
    return this.numberFormat.currencyFormat(totalNoFormated);
  }

  getCartLength(): number{
    return this.cartService.getProductsQuantity();
  }

  removeProductById(id: string) {
    this.cartService.removeProductById(id);
    this.updateData();
    //console.log(this.cartLength);
  }

  updateData(): void{
    this.list = this.cartService.getCart(); // get cart update
    this.cartFormated(this.list);//
    this.cartLength = this.getCartLength();
    this.total = this.getTotalFormated();
  }

  removeData(): void{
    this.cartService.clear();
    this.updateData();
  }
}
