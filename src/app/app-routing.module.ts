import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CheckoutComponent } from './containers/checkout/checkout.component';
import { ProductDetailComponent } from './containers/product-detail/product-detail.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DemoComponent } from './demo/demo.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  // home page : abc.com
  { path: '', component: DemoComponent },
  // products page : abc.com/products
  { path: 'products', component: ProductListComponent },
  { path: 'detail/:pid', component: ProductDetailComponent },
  // checkout page : abc.com/checkout
  { path: 'checkout', component: CheckoutComponent , canActivate: [AuthGuard] },
  // 404 page
  { path: '**' , component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
