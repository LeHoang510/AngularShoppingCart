import {Component, OnInit} from '@angular/core';
import {AddItemService} from "../core/add-item.service";
import {CartItem} from "../interface/cartItem";

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
})

export class SidebarComponent implements OnInit{
  cartItems: CartItem[] = [];
  sum=0;

  constructor(private addItem: AddItemService) { }

  ngOnInit() {
    this.getCartItems();
    this.updateCart();
  }

  getCartItems(){
    this.addItem.getCartItems().subscribe(items => this.cartItems = items);
  }

  decQte(cartItem: CartItem){
    this.addItem.subCartItems(cartItem.item);
    this.getCartItems();
  }
  incQte(cartItem: CartItem){
    this.addItem.addCartItems(cartItem.item);
    this.getCartItems();
  }
  remove(cartItem: CartItem){
    this.addItem.removeCartItems(cartItem.item);
    this.getCartItems();
  }
  inputQte(event: Event, cartItem: CartItem){
    // @ts-ignore
    let input = event.target.value;
    this.addItem.inputCartItems(cartItem.item, input);
    this.getCartItems();
  }
  updateCart(){
    this.addItem.sum.asObservable().subscribe(sum => this.sum=sum);
  }

  buy(){
    //dien gi do vao day
    this.clear();
  }
  clear(){
    for(let cartItem of this.cartItems){
      this.remove(cartItem);
    }
    this.getCartItems();
  }
}

