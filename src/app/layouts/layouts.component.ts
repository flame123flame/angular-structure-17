import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgZorroAntdModule } from '../shared/ng-zorro-antd.module';
import { CommonModule } from '@angular/common';

export interface MenuItem {
  title?: string;
  icon?: string;
  selected?: boolean;
  open?: boolean;
  subMenu?: MenuItem[];
  groupTitle?: string;
  route?: string;
}

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [NgZorroAntdModule, RouterOutlet,CommonModule,RouterModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {
  isCollapsed = false;

  menuItems: MenuItem[] = [
    {
      title: "Navigation One",
      icon: "mail",
      open: true,
      subMenu: [
        {
          groupTitle: "Item 1",
          subMenu: [
            { title: "Option 1", selected: true, route: '/feature/manager/user' },
            { title: "Option 2", route: '/feature/manager/role' }
          ]
        },
        {
          groupTitle: "Item 2",
          subMenu: [
            { title: "Option 3", route: '/option3' },
            { title: "Option 4", route: '/option4' }
          ]
        }
      ]
    },
    {
      title: "Navigation Two",
      icon: "appstore",
      subMenu: [
        { title: "Option 5", route: '/feature/manager/role' },
        { title: "Option 6", route: '/option6' },
        {
          title: "Submenu",
          subMenu: [
            { title: "Option 7", route: '/option7' },
            { title: "Option 8", route: '/option8' },
            {
              title: "Submenu",
              subMenu: [
                { title: "Option 9", route: '/option9' },
                { title: "Option 10", route: '/feature/manager/user' }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Navigation Three",
      icon: "setting",
      subMenu: [
        { title: "Option 11", route: '/option11' },
        { title: "Option 12", route: '/option12' },
        { title: "Option 13", route: '/option13' }
      ]
    }
  ];

  trackByTitle(index: number, item: MenuItem): string {
    return item.title ?? item.groupTitle ?? '';
  }

  trackByGroupTitle(index: number, item: MenuItem): string {
    return item.groupTitle ?? '';
  }
  
}
