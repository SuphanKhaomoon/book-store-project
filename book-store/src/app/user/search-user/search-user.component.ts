import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BookBackendService } from 'src/app/service/book-backend.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  books!: Observable<Book[]>;
  category!: string;

  constructor(private bookBackendService: BookBackendService) { }

  ngOnInit()  {
    // this.category = '1';
    this.searchBook();
  }

  searchBook() {
    this.books = this.bookBackendService.getBookByCatalog('1');
  }

}
