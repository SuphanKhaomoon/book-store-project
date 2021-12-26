import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookBackendService } from 'src/app/service/book-backend.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  id!: number;
  book!: Book;

  constructor(private route: ActivatedRoute, private router: Router,
    private bookBackendService: BookBackendService) { }

  ngOnInit() {
    this.book = new Book();

    this.id = this.route.snapshot.params['id'];

    this.bookBackendService.getBook(this.id)
      .subscribe(
        data => {
          console.log(data)
          this.book = data;
        }, error => console.log(error)
      );
  }

  updateBook() {
    this.bookBackendService.updateBook(this.id, this.book)
      .subscribe(
        data => {
          console.log(data);
        }, error => console.log(error)
      );
      this.book = new Book();
      this.gotoList();
  }

  onSubmit() {
    this.updateBook();
  }

  gotoList() {
    this.router.navigate(['book-list']);
  }
}
