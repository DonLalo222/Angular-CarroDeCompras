import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path: 'products', component: IndexComponent},
  {path: 'cart', component: CartComponent},
  {path: '**', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
