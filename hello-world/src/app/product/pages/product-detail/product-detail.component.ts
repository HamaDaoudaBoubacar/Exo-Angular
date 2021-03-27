import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/http/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: number;

  product$: Observable<Product>;
  toto: string[] = ["id", "name", "categories"];

  constructor(private _activateRoute: ActivatedRoute,
    private _productService: ProductService) { }

  ngOnInit(): void {
    this.productId = Number(this._activateRoute.snapshot.paramMap.get('id'));
    
    if (this.productId) {
      this.fetchData(this.productId);
    }
  }

  fetchData(id: number): void {
    this.product$ = this._productService.getById(id);
  }


}
