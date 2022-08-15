import { Component, OnInit } from '@angular/core';
import { ListItemModel } from '../models/item.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: ListItemModel[] = [];
  iterableItems = Object.keys(this.items);

  deletePrompt: Boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.fetchListItems()
  }

  fetchListItems(): void{
    this.shoppingListService.getListItems().subscribe(fetchedItems =>{
      this.items = fetchedItems;
      console.log(fetchedItems);
    } );
    // console.log('Items Retreived');
    
  }

  onItemDelete(){
    return this.deletePrompt = true;
  }

  onCancelDelete(){
    return this.deletePrompt = false;
  }

  deleteItem(id: any): void{
    this.shoppingListService.deleteListItem(id).subscribe({
      next: (res) => {
        alert('Item Deleted from List');
        this.fetchListItems();
      },
      error: () => {
        alert('ERROR... Could not delete item')
      }
    });
  }

}
