import { Component, OnInit } from '@angular/core';
import {Item} from "../interface/item";
import {ItemService} from "../core/item.service";
import {AddItemService} from "../core/add-item.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: Item[] = [];
  constructor(private itemService: ItemService, private addItemService: AddItemService) { }

  ngOnInit(): void {
    this.getItem();
    this.addItemService.totalCost();
  }

  addItem(item: Item){
    this.addItemService.addCartItems(item);
    this.addItemService.totalCost();
  }

  getItem(){
    this.itemService.getItem().subscribe(items => this.items = items)
  }
  getCate(cate: String){
    this.itemService.getItem().subscribe(items => {
      // @ts-ignore
      this.items = items.filter(function (item){
        if(item.category === cate){
          return item;
        }
      })
    })
  }

}
