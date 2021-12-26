import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = "";

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void { }

  login() {
    this.authenticationService.loginUser(this.user)
      .subscribe(
        data => {
          console.log("response received");
          this.router.navigate(['book-list/category/1'])
          // change button on header
        }, error => {
          console.log("exception occured");
          this.msg = "อีเมล หรือ รหัสผ่านของท่านไม่ถูกต้อง";
        }
        
      )
  }

}
