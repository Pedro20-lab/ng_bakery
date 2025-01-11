import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu.model';

import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [NgFor, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [];
  @ViewChild('toggle') toggleRef!: ElementRef<HTMLInputElement>;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.loadMenuEs();

  }

  changeIdioma(): void {
    const isChecked = this.toggleRef.nativeElement.checked;
    if (isChecked) {
      this.loadMenuEn();
    } else {
      this.loadMenuEs();
    }
  }

  private loadMenuEs(): void {
    this.menuService.getMenuEs().subscribe({
      next: (data) => (this.menus = data),
      error: (err) => console.error('Error al cargar el menú:', err),
    });
  }

  private loadMenuEn(): void {
    this.menuService.getMenuEn().subscribe({
      next: (data) => (this.menus = data),
      error: (err) => console.error('Error al cargar el menú:', err),
    });
  }

  navigateToProducts(menuName: string): void {
    this.router.navigate(['/products', menuName]);
  }
}