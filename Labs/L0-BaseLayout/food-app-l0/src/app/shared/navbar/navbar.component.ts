import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuItem } from '../menuItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private ms: MenuService) { }

  navItems:MenuItem[] = [];
  
  ngOnInit(): void {
    this.ms.getTopItems().subscribe( data=> {
      this.navItems = data;
    })
  }

  toggleMenu() {
    this.ms.toggleMenuVisibility();
  }
}
