import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/core/services/http/product.service';
import { Product } from 'src/app/models/product';
import { ProductListComponent } from '../../pages/product-list/product-list.component';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  productForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private _productService: ProductService, 
    private _dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductListComponent) {

    this.productForm = this.fb.group({
      id: [ProductListComponent.selected.id],
      name: [ProductListComponent.selected.name],
      categories: [ProductListComponent.selected.categories]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(product: Product) {
    if (this.productForm.valid) {
      this._productService.delete(product).subscribe((next) => {
        this.productForm.reset();
        this._dialogRef.close();
      });
    }
  }

}
