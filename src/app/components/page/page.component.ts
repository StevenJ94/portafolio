import { NavbarComponent } from './../navbar/navbar.component';
import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [HomeComponent, NavbarComponent,],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent {

}
