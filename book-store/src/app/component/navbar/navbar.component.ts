import { Component, OnInit } from '@angular/core';
import { BookBackendService } from 'src/app/service/book-backend.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  actives!: boolean[]; 
  number!: number;
  constructor(private bookBackendService: BookBackendService) { 
    
  }

  ngOnInit() {
    this.actives = [false,true,];
    
  }

  onClick() {
    this.number = 1;
    console.log(this.actives[0]);
  }

}
