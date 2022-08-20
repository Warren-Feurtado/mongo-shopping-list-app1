import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { CategoryService } from '../category.service';
import { ListItemModel } from '../models/item.model';
import { CategoryModel } from '../models/category.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})


export class AddItemComponent implements OnInit {

  categories: any =  [];

  newItemForm = this.fb.group({
    item_name: [''],
    category: [''],
    price: [''],
    quantity:['']
  });

  constructor(private shoppingListService: ShoppingListService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private categoryservice: CategoryService) { }

  addNewItem(): void{
    this.shoppingListService.createListItem(this.newItemForm.value).subscribe({
      next: (res) =>{
        alert('Item Added Successfully');
        this.router.navigate(['/shopping-list']);
      },
      error: (err) =>{
        alert('Error encountered While adding The New Item to the List');
        console.log(err);
        
      }
    });
  }

  fetchategories(): void{
    this.categoryservice.getCategories().subscribe(fetchedCategories =>{
      this.categories = fetchedCategories;
      console.log(fetchedCategories);
    })
  }

  ngOnInit(): void {
    this.fetchategories();
  }

}
