import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

export interface MenuList {
  label: string;
  href: string;
  show: boolean;
  children?: MenuList[];
}

@Component({
  selector: 'app-alert-manager-content',
  templateUrl: './alert-manager-content.component.html',
  styleUrls: ['./alert-manager-content.component.scss']
})
export class AlertManagerContentComponent implements OnInit {
  @Input() menuList: MenuList;
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    console.log(this.menuList);
    // this.menuList = this.commonService.memuList;
  }

}
