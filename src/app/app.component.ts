import { ChangeDetectionStrategy, Component,ElementRef,ViewChild  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import { MenuService } from './services/menu.service';
import { Menu } from './models/menu.model';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [NgFor,RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ng-bakery';
  @ViewChild('toggle') toggleRef!: ElementRef<HTMLInputElement>;
  @ViewChild('wtf') wtfRef!: ElementRef<HTMLDivElement>;
  menus: Menu[] = [];

  constructor(private menuService: MenuService) {}
  ngOnInit(): void {
    // Cargar datos desde el archivo JSON
    this.menuService.getMenuEs().subscribe({
      next: (data) => (this.menus = data),
      error: (err) => console.error('Error al cargar el menú:', err),
    });
  }
  // items = [
  //   { name: 'Desayunos', icon: 'egg_alt' },
  //   { name: 'Almuerzos', icon: 'restaurant' },
  //   { name: 'Panadería', icon: 'bakery_dining' },
  //   { name: 'Bebidas', icon: 'water_loss' }
  // ];

  changeIdioma(): void {
    const isChecked = this.toggleRef.nativeElement.checked;
    const el = this.wtfRef.nativeElement;

    if (isChecked) {
      this.menuService.getMenuEn().subscribe({
        next: (data) => (this.menus = data),
        error: (err) => console.error('Error al cargar el menú:', err),
      });
    } else {
      this.menuService.getMenuEs().subscribe({
        next: (data) => (this.menus = data),
        error: (err) => console.error('Error al cargar el menú:', err),
      });
    }
  }
}
