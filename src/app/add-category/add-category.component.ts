import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../models/category.model';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  newCategoryForm = this.fb.group({
    catName: ['']
  });

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private router: Router ) { }

  addNewCategory(): void {
    this.categoryService.createCategory(this.newCategoryForm.value).subscribe({
      next: (res) =>{
        alert('Category Created Successfully');
        this.router.navigate(['/shopping-list']);
      },
      error: (err) =>{
        alert('Error encountered While creating new Category');
        console.log(err);
        
      }
    });
  }

  ngOnInit(): void {
  }

}
