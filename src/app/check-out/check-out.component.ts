import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Books} from '../books.model';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  books: Books[] = []

  totalPrice: number = 0

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.books = this.cartService.getBooksInCart()

    this.books.forEach( book => {
      this.totalPrice += book.price
    })
  }

}
