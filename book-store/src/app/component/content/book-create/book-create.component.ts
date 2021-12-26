import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookBackendService } from 'src/app/service/book-backend.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  book: Book = new Book();
  submitted = false;

  constructor(private bookBackendService: BookBackendService, private router: Router) { }

  ngOnInit() {
  }

  newBook(): void {
    this.submitted = false;
    this.book = new Book();
  }

  save() {
    this.bookBackendService.createBook(this.book)
      .subscribe(
        data => {
          console.log(data)
          this.submitted = true;
        }, error => console.log(error)
      );
    this.book = new Book();
    this.gotoList();
  }

  onSubmit() {
    this.save();
  }

  gotoList() {
    this.router.navigate(['book-list']);
  }

}
