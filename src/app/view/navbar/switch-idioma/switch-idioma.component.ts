import { Component } from '@angular/core';
import { Menu } from '../../../models/menu.model';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-switch-idioma',
  standalone: true,
  imports: [],
  templateUrl: './switch-idioma.component.html',
  styleUrl: './switch-idioma.component.scss'
})
export class SwitchIdiomaComponent {
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
