import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor(public http: HttpClient) {}

  getProductList() {
    return this.http.get('https://fakestoreapi.com/products').pipe(
      take(3),
      map((response: any) => {
        return response.map((res: any) => {
          return res;
        });
      })
    );
  }

  getProduct(id: any) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
