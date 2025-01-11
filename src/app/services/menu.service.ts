// services/menu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private jsonEsUrl = 'assets/baseMenu.es.json'; // URL del archivo local
  private jsonEnUrl = 'assets/baseMenu.en.json'; // URL del archivo local

  constructor(private http: HttpClient) {}

  // Obtener los datos simulados desde el archivo JSON
  getMenuEs(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.jsonEsUrl);
  }
  getMenuEn(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.jsonEnUrl);
  }

  // Ejemplo para obtener datos desde una API real
  // update la URL cuando tengas tu API
  getMenuFromApi(): Observable<Menu[]> {
    return this.http.get<Menu[]>('https://tu-api.com/menus');
  }
}