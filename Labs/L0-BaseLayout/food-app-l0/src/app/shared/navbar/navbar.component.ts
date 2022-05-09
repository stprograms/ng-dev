import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private ms: MenuService) { }

  navItems:string[] = [];
  
  ngOnInit(): void {
    this.ms.getMenuItems().subscribe( data=> {
      this.navItems = data;
    })
  }

}
