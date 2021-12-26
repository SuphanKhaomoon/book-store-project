import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

}
