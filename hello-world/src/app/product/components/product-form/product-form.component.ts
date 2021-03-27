import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/core/services/http/product.service';
import { Product } from 'src/app/models/product';
import { ProductFormData } from 'src/app/models/product-form-data';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  formAction:string;
  titre:string;

  constructor(private fb: FormBuilder,
    private _productService: ProductService,
    private _dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductFormData) {

    this.formAction = data.toUpdate? "Modifier" : "Ajouter";

    if (data.toUpdate) {
      this.titre = "Update Product";
    this.productForm = this.fb.group({
      name: [data.product.name, [Validators.required, this.noWhitespaceValidator]],
      categories: [data.product.categories, [Validators.required, this.noWhitespaceValidator]]
    })
  }
  else{
    this.titre = "Add New Product";
    this.productForm = this.fb.group({
      name: ['', [Validators.required, this.noWhitespaceValidator]],
      categories: ['', [Validators.required, this.noWhitespaceValidator]]
    })
  }
  }

  ngOnInit(): void {
  }

  onSubmit(product: Product) {
    if (this.productForm.valid) {
      if (this.data.toUpdate) {
        product.id = this.data.product.id;
        this._productService.put(product).subscribe((next) => {
        this.productForm.reset();
        this._dialogRef.close();
      });
    }
    else{
      this._productService.post(product).subscribe((next) => {
        this.productForm.reset();
        this._dialogRef.close();
      });
    }
  }
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;

    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

}
