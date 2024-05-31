import { Component } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // html 
  styleUrls: ['./header.component.css'] // css 
})
export class HeaderComponent {
  cartCount: number = 0;

  constructor( private cartDataService: CartDataService) {
    this.cartDataService.latestCartItems$.subscribe((res) => {
      console.log(res);
      this.cartCount = res.length;
    });
  }
}
