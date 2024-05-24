import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">Welcome to User Manager Plus</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nihil molestias...
        </p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-primary btn-lg px-4 gap-3">
            Manage Users
          </button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">
            Browse Products
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
