import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { SwitchIdiomaComponent } from './switch-idioma/switch-idioma.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { CategoriasComponent } from './categorias/categorias.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent, SwitchIdiomaComponent,ContenidoComponent,CategoriasComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
