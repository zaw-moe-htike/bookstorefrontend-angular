import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Books} from '../books.model';
import {BookService} from '../book.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService, private cartService: CartService,
              private router: Router) { }

  bookId: number;

  book: Books;

  books: Books[] = [];

  ngOnInit() {

    this.route.paramMap.subscribe((param: ParamMap)=>{
      this.bookId = parseInt(param.get('id'))
    });

    this.bookService.getOneBook(this.bookId).subscribe(data => {
      this.book = data
    })

    this.books = this.cartService.getBooksInCart()
  }

  addToCart(book: Books) {
    this.cartService.addToCart(book)
  }

  continueShopping() {
    this.router.navigate(["books"])
  }

  showCart() {
    this.router.navigate(["cart"])
  }
}
