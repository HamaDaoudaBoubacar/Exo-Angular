import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';


@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductFormComponent, DeleteProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
