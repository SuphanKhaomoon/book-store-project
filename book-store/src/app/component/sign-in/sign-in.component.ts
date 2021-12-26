import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserBackendService } from 'src/app/service/user-backend.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  validateEmail: boolean = false;

  constructor(private userBackendService: UserBackendService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name : ['', Validators.required],
      surname : ['', Validators.required],
      email : ['', [Validators.required, Validators.pattern]],
      tel : ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password : ['', [Validators.required, Validators.minLength(8)]]
    });
    
  }
  get name() { return this.form.get('name') }
  get surname() { return this.form.get('surname') }
  get email() { return this.form.get('email'); }
  get tel() { return this.form.get('tel'); }
  get password() { return this.form.get('password'); }

  ngOnInit() { }

  save() {
    this.userBackendService.createUser(this.form.value)
      .subscribe(
        data => {
          if(data == null){
            this.validateEmail = true;
          }
        },
        error => console.log(error));
  }

  signin() {
    // console.log(this.form.value);
    this.save();
    this.router.navigate(['login']);
  }

}
