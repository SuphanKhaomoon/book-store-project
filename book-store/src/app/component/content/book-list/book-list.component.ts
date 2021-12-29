import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookBackendService } from 'src/app/service/book-backend.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books!: Observable<Book[]>;
  category!: string;
  admin: boolean = false;
  bookList: any;

  constructor(private bookBackendService: BookBackendService, 
              private router: Router, private route: ActivatedRoute,
              private cartService: CartService) { 
                
  }

  ngOnInit() {
    // this.reloadData();
    this.category = this.route.snapshot.params['category'];
    this.bookBackendService.getBookByCatalog(this.category)
      .subscribe(res=>{
        this.bookList = res;

        this.bookList.forEach((a:any) => {
          Object.assign(a,{quantity:1,total:a.price});
        })
    })

    this.searchBook();

  }

  searchBook() {
    this.books = this.bookBackendService.getBookByCatalog(this.category);
    
  }

  deleteBook(id: number) {
    this.bookBackendService.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          // this.reloadData();
        },
        error => console.log(error));
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
