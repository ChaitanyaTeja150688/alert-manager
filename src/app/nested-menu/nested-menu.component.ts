import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MenuList } from '../components/alert-manager-content/alert-manager-content.component';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})

export class NestedMenuComponent implements OnInit {
  menuItems: MenuList[] = [
    {
      label: 'Home',
      href: '/home',
      show: false
    },
    {
      label: 'Articles',
      href: '/articles',
      show: false,
      children: [
        {
          label: 'News',
          href: '/articles/news',
          show: false,
          children: [
            {
              label: 'News 1',
              href: '/articles/news',
              show: false
            },
            {
              label: 'Entertainment 1',
              href: '/articles/entertain',
              show: false,
              children: [
                {
                  label: 'News 2',
                  href: '/articles/news',
                  show: false
                },
                {
                  label: 'Entertainment 2',
                  href: '/articles/entertain',
                  show: false
                },
              ],
            },
          ]
        },
        {
          label: 'Entertainment',
          href: '/articles/entertain',
          show: false
        },
      ],
    },
    {
      label: 'About',
      href: '/about',
      show: false,
      children: [
        {
          label: 'News 1',
          href: '/articles/news',
          show: false
        },
        {
          label: 'Entertainment 1',
          href: '/articles/entertain',
          show: false,
          children: [
            {
              label: 'News 2',
              href: '/articles/news',
              show: false
            },
            {
              label: 'Entertainment 2',
              href: '/articles/entertain',
              show: false,
              children: [
                {
                  label: 'News 3',
                  href: '/articles/news',
                  show: false
                },
                {
                  label: 'Entertainment 3',
                  href: '/articles/entertain',
                  show: false,
                  children: [
                    {
                      label: 'News 4',
                      href: '/articles/news',
                      show: false
                    },
                    {
                      label: 'Entertainment 4',
                      href: '/articles/entertain',
                      show: false,
                      children: [
                        {
                          label: 'News 1',
                          href: '/articles/news',
                          show: false
                        },
                        {
                          label: 'Entertainment 1',
                          href: '/articles/entertain',
                          show: false,
                          children: [
                            {
                              label: 'News 2',
                              href: '/articles/news',
                              show: false
                            },
                            {
                              label: 'Entertainment 2',
                              href: '/articles/entertain',
                              show: false
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ]
    },
  ];

  @Output() content: EventEmitter<any> = new EventEmitter();
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
  }

  showHideChildNodes(item) {
    item.show = !item.show;
    this.activateAlertManagerContent(item);
    if (!item.show && item.children) {
      item.children.forEach(node => {
        node.show = false;
        if (node.children) {
          this.loop(node);
        }
      });
    }
    this.menuItems.forEach((menu: MenuList) => {
      if (menu !== item) {
        menu.show = false;
      }
    });
  }

  loop(item) {
    item.children.forEach(node => {
      node.show = false;
      if (node.children) {
        this.loop(node);
      }
    });
  }

  activateAlertManagerContent(menu) {
    this.content.emit(menu);
  }
}
