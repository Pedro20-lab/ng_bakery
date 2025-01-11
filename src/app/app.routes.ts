import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' }, // Ruta inicial
  { path: 'menu', component: MenuComponent }, 
  { path: 'products/:menuName', component: ProductsComponent },          // Ruta para el menú
];