import { Injectable } from '@angular/core';
import {Books} from './books.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  books: Books[] = []

  constructor() { }

  public addToCart(book) {
    let isExisted = true;

    this.books.forEach(value => {
      if(value.id === book.id) {
        isExisted = false
      }
    })

    if(isExisted) {
      this.books.push(book)
    }
  }

  public getBooksInCart() {
    return this.books
  }

  clearCart() {
    this.books = []
  }
}
