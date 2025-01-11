import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { MenuService } from '../services/menu.service';
import { Menu } from '../models/menu.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  menuName: string = '';
  menus: Menu[] = [];
  @ViewChild('toggle') toggleRef!: ElementRef<HTMLInputElement>;
  
    constructor(private route: ActivatedRoute,private menuService: MenuService) {}

  ngOnInit(): void {
    // Obtener el parámetro de la URL
    this.menuName = this.route.snapshot.paramMap.get('menuName') || '';
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
  
}
