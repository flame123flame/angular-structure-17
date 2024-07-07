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
  roles?: string[];
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
      title: "Dashboard",
      icon: "dashboard",
      route: '/dashboard',
      roles: ['admin', 'user', 'manager'],
    },
    {
      title: "User Management",
      icon: "user",
      roles: ['admin'],
      subMenu: [
        { title: "Manage Users", route: '/user-management/users', roles: ['admin'] },
        { title: "Manage Roles", route: '/user-management/roles', roles: ['admin'] },
        {
          groupTitle: "Permissions",
          subMenu: [
            { title: "View Permissions", route: '/user-management/permissions/view', roles: ['admin'] },
            { title: "Edit Permissions", route: '/user-management/permissions/edit', roles: ['admin'] }
          ]
        },
        { title: "User Activity Logs", route: '/user-management/activity-logs', roles: ['admin'] }
      ]
    },
    {
      title: "Settings",
      icon: "setting",
      subMenu: [
        { title: "Profile Settings", route: '/settings/profile', roles: ['admin', 'user', 'manager'] },
        { title: "System Settings", route: '/settings/system', roles: ['admin'] },
        { title: "Notification Settings", route: '/settings/notifications', roles: ['admin', 'user', 'manager'] }
      ]
    },
    {
      title: "Content Management",
      icon: "file",
      roles: ['admin', 'editor'],
      subMenu: [
        { title: "Manage Posts", route: '/content-management/posts', roles: ['admin', 'editor'] },
        { title: "Manage Pages", route: '/content-management/pages', roles: ['admin', 'editor'] },
        {
          groupTitle: "Media Library",
          subMenu: [
            { title: "View Media", route: '/content-management/media/view', roles: ['admin', 'editor'] },
            { title: "Upload Media", route: '/content-management/media/upload', roles: ['admin', 'editor'] },
            {
              title: "Sub Library",
              subMenu: [
                { title: "Library Option 1", route: '/content-management/media/library1', roles: ['admin', 'editor'] },
                { title: "Library Option 2", route: '/content-management/media/library2', roles: ['admin', 'editor'] },
                {
                  title: "Deep Library",
                  subMenu: [
                    { title: "Deep Option 1", route: '/content-management/media/deep1', roles: ['admin', 'editor'] },
                    { title: "Deep Option 2", route: '/content-management/media/deep2', roles: ['admin', 'editor'] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
        {
      title: "Navigation Two",
      icon: "appstore",
      subMenu: [
        { title: "Option 5", route: '/manager/role' },
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
                { title: "Option 10", route: '/manager/user' }
              ]
            }
          ]
        }
      ]
    },
  ];
  
  
  // menuItems: MenuItem[] = [
  //   {
  //     title: "หน้าแรก",
  //     icon: "windows",
  //     route: '/dashboard',
  //     subMenu: []
  //   },
  //   {
  //     title: "ข้อมูลผู้ใช้งาน",
  //     icon: "mail",
  //     subMenu: [
  //       {
  //         groupTitle: "Item 1",
  //         subMenu: [
  //           { title: "Option 1",  route: '/manager/user' },
  //           { title: "Option 2", route: '/manager/role' }
  //         ]
  //       },
  //       {
  //         groupTitle: "Item 2",
  //         subMenu: [
  //           { title: "Option 3", route: '/option3' },
  //           { title: "Option 4", route: '/option4' }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Navigation Two",
  //     icon: "appstore",
  //     subMenu: [
  //       { title: "Option 5", route: '/manager/role' },
  //       { title: "Option 6", route: '/option6' },
  //       {
  //         title: "Submenu",
  //         subMenu: [
  //           { title: "Option 7", route: '/option7' },
  //           { title: "Option 8", route: '/option8' },
  //           {
  //             title: "Submenu",
  //             subMenu: [
  //               { title: "Option 9", route: '/option9' },
  //               { title: "Option 10", route: '/manager/user' }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     title: "Navigation Three",
  //     icon: "setting",
  //     subMenu: [
  //       { title: "Option 11", route: '/option11' },
  //       { title: "Option 12", route: '/option12' },
  //       { title: "Option 13", route: '/option13' }
  //     ]
  //   }
  // ];

  trackByTitle(index: number, item: MenuItem): string {
    return item.title ?? item.groupTitle ?? '';
  }

  trackByGroupTitle(index: number, item: MenuItem): string {
    return item.groupTitle ?? '';
  }
  
}
