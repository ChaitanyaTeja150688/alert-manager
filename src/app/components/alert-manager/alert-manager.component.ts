import { Component, OnInit } from '@angular/core';
import { MenuList } from '../alert-manager-content/alert-manager-content.component';

@Component({
  selector: 'app-alert-manager',
  templateUrl: './alert-manager.component.html',
  styleUrls: ['./alert-manager.component.scss']
})
export class AlertManagerComponent implements OnInit {
  menuList:MenuList[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  showAlertManagerContent(menu) {
    if (menu.children) {
      this.menuList = menu;
    } else {
      this.menuList = [];
    }
  }

}
