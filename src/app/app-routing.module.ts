import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {CartComponent} from './cart/cart.component';
import {CheckOutComponent} from './check-out/check-out.component';

const routes: Routes = [
  {path:'',redirectTo:'/books',pathMatch:'full'},
  {path:'books',component:BookListComponent},
  {path:'books/:id', component:BookDetailsComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
