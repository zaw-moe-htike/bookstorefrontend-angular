import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Books} from './books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url:string='http://localhost:8080/book/';

  constructor(private  httpClient:HttpClient) { }

  public getAllBooks():Observable<Books[]>{
    return this.httpClient.get<Books[]>(this.url+'all');
  }

  public getOneBook(id):Observable<Books> {
    return this.httpClient.get<Books>(this.url+id);
  }
}
