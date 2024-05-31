import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { authGuard } from '../shared/guards/auth.guard';

const routes: Routes = [
  { path: 'products', component: ListProductsComponent, canActivate: [authGuard] },
  { path: 'products/:id', component: ProductDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // nested / child routing
  ],
  exports: [RouterModule], // exporting RouterModule for child routing
})
export class ProductsRoutingModule {}
