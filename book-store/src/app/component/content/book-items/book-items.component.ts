import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {
  @Input()
  book: Book;

  constructor(private cartService: CartService) {
    this.book = new Book;
  }

  ngOnInit(): void {
    this.book
  }

  addtocart(_item: any) {
    this.cartService.addtoCart(_item);
  }

}
