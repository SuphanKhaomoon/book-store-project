import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserBackendService } from 'src/app/service/user-backend.service';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user!: User;

  constructor(private userBackendService: UserBackendService, private listComponent: UserListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean){
    this.userBackendService.updateUser(this.user.id,
      { name: this.user.name, 
        surname: this.user.surname,
        email: this.user.email,
        tel: this.user.tel,
        password: this.user.password,
        active: this.user.active })
        .subscribe(
          data => {
            console.log(data);
            this.user = data as User;
          },
          error => console.log(error));
  }

  deleteUser() {
    this.userBackendService.deleteUser(this.user.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
