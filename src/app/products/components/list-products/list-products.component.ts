import { Component } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-list-products',
  template: `
    <div class="container-fluid">
      <h1>Products</h1>
      <div class="col">
        <div class="row">
          <div
            class="col-12 col-md-6 col-lg-3 mb-3"
            *ngFor="let product of products"
          >
            <div class="card">
              <img
                class="card-img-top"
                src="https://dummyimage.com/300x220/55595c/fff"
                alt="Card image cap"
              />

              <div class="card-body">
                <h4 class="card-title">
                  <a
                    routerLink="/products/{{ product.id }}"
                    title="View Product"
                    >{{ product.name }}</a
                  >
                </h4>

                <p class="card-text">Category: {{ product.category }}</p>
                <div class="row">
                  <div class="col">
                    <p>$ {{ product.price }}</p>
                  </div>
                  <div class="col">
                    <button
                      class="btn btn-success btn-block"
                      (click)="handleAddToCart(product)"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ListProductsComponent {
  products: any[] = [];

  constructor(private cartDataService: CartDataService) {
    this.products = [
      {
        id: 1,
        name: 'Bread',
        category: 'Food',
        price: 10,
      },
      {
        id: 2,
        name: 'Milk',
        category: 'Food',
        price: 20,
      },
      {
        id: 3,
        name: 'Butter',
        category: 'Food',
        price: 30,
      },
      {
        id: 4,
        name: 'Eggs',
        category: 'Food',
        price: 40,
      },
    ];
  }

  handleAddToCart(product: any) {
    console.log(product);
    this.cartDataService.updateCart(product);
  }
}
