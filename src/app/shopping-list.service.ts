import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';
import { ListItemModel } from './models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private Base_URL = "http://localhost:3000/items";
  private HTTP_HEADER = {
    headers: new HttpHeaders({'content-type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getListItems(): Observable<ListItemModel[]> {
    return this.http.get<ListItemModel[]>(this.Base_URL).pipe(
      tap((data) => {
        console.log(`List Items Retreived ${data}`),
        
        catchError(error => of([]))
      })
    );
  };

  getListItemById(id: String): Observable<ListItemModel> {
    return this.http.get<ListItemModel>(`${this.Base_URL}/${id}`).pipe(
      tap((data) => {
        console.log(`Retreived Item is ${JSON.stringify(data)}`),

        catchError(error => of([]))
        
      })
    );
  }

  createListItem(item: ListItemModel): Observable<ListItemModel | any> {
    return this.http.post<ListItemModel>(`${this.Base_URL}`, item, this.HTTP_HEADER).pipe(
      tap((data) => {
        console.log(`Item added to list successfully`),

        catchError(error => of(data))
        
      })
    );
  };

  UpdateListItem(id: string, item: ListItemModel): Observable<ListItemModel>{
    return this.http.patch<ListItemModel>(`${this.Base_URL}/${id}`, item, this.HTTP_HEADER).pipe(
      tap(editedItem => {
        console.log(`Student Updated Successfully`);
        
        catchError(error => of(editedItem))
      })
      
    );
  };

  deleteListItem(id: string): Observable<ListItemModel>{
    return this.http.delete<ListItemModel>(`${this.Base_URL}/${id}`)
  }

  getListItemByCategory(id: string): Observable<ListItemModel> {
    return this.http.get<ListItemModel>(`${this.Base_URL + '/getcollections'}/${id}`)
  }
}
