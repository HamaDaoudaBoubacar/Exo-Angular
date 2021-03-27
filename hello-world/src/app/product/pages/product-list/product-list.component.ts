import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/http/product.service';
import { Product } from 'src/app/models/product';
import { ProductFormData } from 'src/app/models/product-form-data';
import { DeleteProductComponent } from '../../components/delete-product/delete-product.component';
import { ProductFormComponent } from '../../components/product-form/product-form.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  products$: Observable<Product[]>;
  static selected: Product;
  displayedColumns: string[] = ["id", "name", "categories", "update", "delete"];

  constructor(private _productService: ProductService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.products$ = this._productService.get();
  }

  openDialog(toUpdate: boolean, product: Product) {

    const ProductFormData:ProductFormData={
      toUpdate:toUpdate,
      product:product
    }
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: ProductFormData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  openDialog1(product: Product) {
    ProductListComponent.selected = product;

    const dialogRef = this.dialog.open(DeleteProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

}
