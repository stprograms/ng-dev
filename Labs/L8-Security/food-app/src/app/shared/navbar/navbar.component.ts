import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { NavItem } from './navItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public ms: MenuService) {}

  items: NavItem[];

  ngOnInit() {
    this.items = [
      { title: 'Home', url: '/' },
      { title: 'Products', url: '/products' },
      { title: 'About', url: '/about' },
    ];
  }

  toggleMenu() {
    this.ms.toggleMenuVisibility();
  }
}
