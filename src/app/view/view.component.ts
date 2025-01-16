import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';

@Component({
  standalone:true,
  selector: 'app-view',
  imports: [NavbarComponent,BodyComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent {

}
