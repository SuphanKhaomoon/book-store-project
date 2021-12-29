import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentRoutingModule } from './content-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BookItemsComponent } from './book-items/book-items.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { BookCreateComponent } from './book-create/book-create.component';

@NgModule({
  declarations: [
    BookItemsComponent,
    BookListComponent,
    BookCreateComponent,
    BookUpdateComponent,
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers:[],
})
export class ContentModule { }
