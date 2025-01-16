import { ChangeDetectionStrategy, Component,ElementRef,OnInit,ViewChild  } from '@angular/core';
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
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  menus: Menu[] = [];
  currentLanguage: string = 'es'; // Idioma inicial

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadMenu();
  }

  changeIdioma(): void {
    this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    this.loadMenu();
  }

  private loadMenu(): void {
    const menuServiceMethod =
      this.currentLanguage === 'es'
        ? this.menuService.getMenuEs()
        : this.menuService.getMenuEn();

    menuServiceMethod.subscribe({
      next: (data) => (this.menus = data),
      error: (err) => console.error('Error al cargar el menú:', err),
    });
  }
}
