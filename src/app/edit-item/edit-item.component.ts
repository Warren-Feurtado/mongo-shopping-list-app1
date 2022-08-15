import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ListItemModel } from '../models/item.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  selectedItem!: ListItemModel;
  itemEditForm = this.fb.group({
    item_name: [''],
    category: [''],
    price: [''],
    quantity:['']
  });

  constructor(private shoppingListService: ShoppingListService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getItemForEditing();
    console.log(`${this.selectedItem}`)
  }

  getItemForEditing(){
    this.shoppingListService.getListItemById(this.route.snapshot.params['id']).subscribe(retreivedItem => {
      this.selectedItem = retreivedItem;
      this.itemEditForm = this.fb.group({
        item_name: [this.selectedItem.item_name],
        category: [this.selectedItem.category],
        price: [this.selectedItem.price],
        quantity:[this.selectedItem.quantity]
      });
    });
  }

  updateListItem(): void{
    this.shoppingListService.UpdateListItem(this.route.snapshot.params['id'], this.itemEditForm.value).subscribe({
      next: (res) => {
        alert('Item Updated Successfully');
        this.router.navigate(['/shopping-list']);
      }
    })
  }

}
