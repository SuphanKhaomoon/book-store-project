import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserBackendService } from 'src/app/service/user-backend.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: Observable<User[]>;

  constructor(private userBackendService: UserBackendService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteUsers() {
    this.userBackendService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error)
      );
  }

  reloadData() {
    this.users = this.userBackendService.getUsersList();
  }

}
