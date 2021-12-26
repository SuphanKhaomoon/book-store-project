import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { BookCreateComponent } from './component/content/book-create/book-create.component';
import { BookItemsComponent } from './component/content/book-items/book-items.component';
import { BookListComponent } from './component/content/book-list/book-list.component';
import { BookUpdateComponent } from './component/content/book-update/book-update.component';
import { LoginComponent } from './component/login/login.component';
import { SignInComponent } from './component/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'book-list/category/:category', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'book-list/category/:category', component: BookListComponent},
  { path: 'book-create', component: BookCreateComponent},
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
