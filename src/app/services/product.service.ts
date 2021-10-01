import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { productList } from "../data/productList";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productIndexedList: any;

  constructor() {
    this.productIndexedList = this.productsIndexed();
  }

  productsIndexed(){
    return productList.reduce((acc, element) => ({
      ...acc,
      [element._id]: element
    }), {});
  }

  getAll(): Array<Product>{
    let list: Array<Product> = [];
    for(let item in this.productIndexedList){
      list.push({
        _id: this.productIndexedList[item]._id,
        name: this.productIndexedList[item].name,
        description: this.productIndexedList[item].description,
        picture: this.productIndexedList[item].picture,
        stock: this.productIndexedList[item].stock,
        price: this.productIndexedList[item].price
      });
    }
    return list;
  }

  findById(id: string): Product{
    return this.productIndexedList[id];
  }
}
