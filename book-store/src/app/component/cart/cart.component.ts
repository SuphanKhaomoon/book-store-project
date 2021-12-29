import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  book!: Book[];
  granTotal !: number;
  quantity!: number;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(
        data => {
          this.book = data;
          this.granTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }

  gotoBooklist() {
    this.router.navigate(['book-list/10']);
  }

}
