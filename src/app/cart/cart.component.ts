import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Books} from '../books.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books: Books[] = []

  constructor(private cartService: CartService, private  router: Router) { }

  ngOnInit() {
    this.books = this.cartService.getBooksInCart()
  }

  clearCart() {
    this.cartService.clearCart()
  }

  checkOut() {
    this.router.navigate(["checkout"])
  }
}
