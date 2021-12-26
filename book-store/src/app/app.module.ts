import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SearchBarComponent } from './component/header/search-bar/search-bar.component';
import { LogoComponent } from './component/header/logo/logo.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { BookItemsComponent } from './component/content/book-items/book-items.component';
import { BookListComponent } from './component/content/book-list/book-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { CreatUserComponent } from './user/creat-user/creat-user.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { LoginComponent } from './component/login/login.component';
import { CartComponent } from './component/cart/cart.component';
import { BookUpdateComponent } from './component/content/book-update/book-update.component';
import { BookCreateComponent } from './component/content/book-create/book-create.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'

import { UserBackendService } from './service/user-backend.service';
import { AuthenticationService } from './service/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NavbarComponent,
    SearchBarComponent,
    LogoComponent,
    SignInComponent,
    BookItemsComponent,
    BookListComponent,
    LoginComponent,
    CartComponent,
    UserListComponent,
    UserDetailsComponent,
    CreatUserComponent,
    SearchUserComponent,
    BookCreateComponent,
    BookUpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [UserBackendService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
