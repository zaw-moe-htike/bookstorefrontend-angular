import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Books} from '../books.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:Books[]=[];
  constructor(private  bookservice:BookService, private router: Router) { }

  ngOnInit() {
    this.bookservice.getAllBooks()
      .subscribe(data =>{
      this.books=data;
    })
  }

  public goToDetails(book) {
    console.log("Book ID : " + book.id)
    this.router.navigate(['books',book.id])
  }

}
