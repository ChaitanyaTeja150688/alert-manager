import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-child-node',
  templateUrl: './child-node.component.html',
  styleUrls: ['./child-node.component.scss']
})
export class ChildNodeComponent implements OnInit {
  @Input() items;
  // @Output() content = new EventEmitter();
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  showHideChildNodes(item) {
    item.show = !item.show;
    this.commonService.memuList = item;
    if (!item.show && item.children) {
      item.children.forEach(node => {
        node.show = false;
        if (node.children) {
          this.loop(node);
        }
      });
    }
  }

  loop(item) {
    item.children.forEach(node => {
      node.show = false;
      if (node.children) {
        this.loop(node);
      }
    });
  }

  // activateAlertManagerContent(menu) {
  //   //this.content.emit(menu);
  // }

}
