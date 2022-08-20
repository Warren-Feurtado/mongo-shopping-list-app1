import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, of } from 'rxjs';
import { CategoryModel } from './models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private Base_URL = "http://localhost:3000/categories";
  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.Base_URL).pipe(
      tap((data) => {
        console.log(`List Items Retreived ${data}`),
        
        catchError(error => of([]))
      })
    );
  }

  getCategoryById(id: String): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.Base_URL}/${id}`).pipe(
      tap((data) => {
        console.log(`Retreived Category is ${JSON.stringify(data)}`),

        catchError(error => of([]))
        
      })
    );
  }

  createCategory(category: CategoryModel): Observable<CategoryModel | any> {
    return this.http.post<CategoryModel>(`${this.Base_URL}`, category, this.HTTP_HEADER).pipe(
      tap((data) => {
        console.log(`Category added to list successfully`),

        catchError(error => of(data))
        
      })
    );
  }

  updateCategory(id: String, category: CategoryModel): Observable<CategoryModel>{
    return this.http.patch<CategoryModel>(`${this.Base_URL}/${id}`, category, this.HTTP_HEADER).pipe(
      tap(editedCategory => {
        console.log(`Student Updated Successfully`);
        
        catchError(error => of(editedCategory))
      })
      
    );
  }

  deleteCategory(id: String): Observable<CategoryModel> {
    return this.http.delete<CategoryModel>(`${this.Base_URL}/${id}`);
  }

}
