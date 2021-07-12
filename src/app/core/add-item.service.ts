import { Injectable } from '@angular/core';
import {Item} from "../interface/item";
import {BehaviorSubject, Observable, of} from "rxjs";
import {CartItem} from "../interface/cartItem";

@Injectable({
  providedIn: 'root'
})
export class AddItemService {

  cartItems: CartItem[]= [];
  sum = new BehaviorSubject<number>(0);
  coin = 0;

  constructor() { }

  addCartItems(item: Item){
    let index = this.inCart(item);
    if(index == -1){
      this.cartItems.push({item: item, qte: 1});
      this.totalCost();
    }else{
      this.cartItems[index].qte++;
      this.totalCost();
    }

  }
  subCartItems(item: Item){
    let temp = this.cartItems[this.inCart(item)].qte - 1;
    if(temp == 0){
      this.removeCartItems(item);
    }else{
      this.cartItems[this.inCart(item)].qte--;
    }
    this.totalCost();
  }
  removeCartItems(item: Item){
    this.cartItems = this.cartItems.filter(cartItem => cartItem.item !== item);
    this.totalCost();
  }
  inputCartItems(item: Item, qte: number){
    this.cartItems[this.inCart(item)].qte = qte;
    this.totalCost();
  }
  totalCost(){
    let sum = 0;
    for(let cartItem of this.cartItems){
      sum += cartItem.qte*cartItem.item.price;
    }
    this.sum.next(sum);
  }

  getCartItems(): Observable<CartItem[]>{
    return of (this.cartItems);
  }
  inCart(item: Item): number{
    for(let i = 0; i < this.cartItems.length; i++){
      if(this.cartItems[i].item === item){
        return i;
      }
    }
    return -1;
  }

}
