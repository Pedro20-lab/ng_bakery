import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' }, 
  { path: 'menu', component: MenuComponent }, 
  { path: 'view', component: ViewComponent },  
];