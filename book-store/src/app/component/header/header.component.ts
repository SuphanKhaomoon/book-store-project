import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count: number;
  showButton: boolean = true;

  constructor(private cartService: CartService) { 
    this.count = 0;
  }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
        this.count = res.length;
      })
  }

  // addShopping () {
  //   this.count = this.count + 1;
  // }

}
