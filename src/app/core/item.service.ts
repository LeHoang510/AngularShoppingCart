import { Injectable } from '@angular/core';
import { ITEMS } from '../interface/mock-items';
import {Observable, of} from "rxjs";
import {Item} from "../interface/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItem(): Observable<Item[]>{
    return of (ITEMS);
  }
}
