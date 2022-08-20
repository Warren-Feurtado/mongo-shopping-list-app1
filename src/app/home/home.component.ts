import { Component, OnInit } from '@angular/core';
import { ListItemModel } from '../models/item.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: ListItemModel[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
