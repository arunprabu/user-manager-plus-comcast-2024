import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  /*
    let's keep default cart items here
    let's make it subscribable to Header comp 
  */
  // Step 1: Have the default cart items in ts
  private defaultCartItems: any[] = [
    {
      id: 3,
      name: 'Butter',
      category: 'Food',
      price: 30,
    }
  ];

  // Step 2: Create an Observable. This should also act as Observer
  // It is Subject. Because we have default cart items, preferred one is BehaviorSubject
  private cartItems = new BehaviorSubject(this.defaultCartItems);
  // Step 3: We will make the cartItems as Observable
  latestCartItems$ = this.cartItems.asObservable();

  constructor() {
    console.log('inside CartDataService constructor');
  }

  // Let's update the cart items 
  updateCart(newCartItem: any) {
    console.log(newCartItem);

    this.latestCartItems$.pipe(take(1)).subscribe((existingCartItems: any[]) => {
      console.log(existingCartItems);
      const updatedCartItems = [...existingCartItems, newCartItem];
      this.cartItems.next(updatedCartItems);
    });
  }
}
