import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly BASE_URL = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }

}
