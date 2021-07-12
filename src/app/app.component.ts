import { Component } from '@angular/core';
import {AddItemService} from "./core/add-item.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularShoppingMenu';
  coin = 500;

}
