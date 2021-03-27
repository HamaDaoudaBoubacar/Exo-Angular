import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { ProductService } from './services/http/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentService } from './services/http/comment.service';
import { AccueilComponent } from './components/accueil/accueil.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, AccueilComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSliderModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [ProductService, CommentService]
})
export class CoreModule { }
