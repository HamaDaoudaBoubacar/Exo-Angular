import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService {

  
  endPoint: string = environment.productEndPoint;

  constructor(private _httpClient: HttpClient) { }

  get(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(this.endPoint);
  }

  getById(id: number): Observable<Product> {
    return this._httpClient.get<Product>(this.endPoint+"/"+id);
  }

  post(product: Product): Observable<Product> {
    return this._httpClient.post<Product>(this.endPoint, product);
  }

  put(product: Product): Observable<Product> {
    return this._httpClient.put<Product>(this.endPoint + "/" + product.id, product);
  }

  delete(product: Product): Observable<Product> {
    return this._httpClient.delete<Product>(this.endPoint + "/" + product.id);
  }
}
