import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly BASE_URL = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }
  
  addUser(createUserDto): Observable<Object> {
    return this.http.post('http://localhost:3000/users', {
      content: createUserDto.content,
      submittedBy: createUserDto.submittedBy
    });
  }

  /*addUser(createUserDto): Observable<any> {
    return this.http.get(this.addUser(createUserDto));
  }*/

  

  //addUser(createUserDto): Observable<any> {
    //return this.http.get(this.addUser(createUserDto));
  //}
  
}
