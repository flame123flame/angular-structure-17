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
      title: "แดชบอร์ด",
      icon: "dashboard",
      route: '/dashboard',
      roles: ['admin', 'user', 'manager'],
    },
    {
      title: "การจัดการผู้ใช้",
      icon: "user",
      roles: ['admin'],
      subMenu: [
        { title: "จัดการผู้ใช้", route: '/user-management/users', roles: ['admin'] },
        { title: "จัดการบทบาท", route: '/user-management/roles', roles: ['admin'] },
        {
          groupTitle: "การอนุญาต",
          subMenu: [
            { title: "ดูการอนุญาต", route: '/user-management/permissions/view', roles: ['admin'] },
            { title: "แก้ไขการอนุญาต", route: '/user-management/permissions/edit', roles: ['admin'] }
          ]
        },
        { title: "บันทึกกิจกรรมผู้ใช้", route: '/user-management/activity-logs', roles: ['admin'] }
      ]
    },
    {
      title: "การตั้งค่า",
      icon: "setting",
      subMenu: [
        { title: "การตั้งค่าโปรไฟล์", route: '/settings/profile', roles: ['admin', 'user', 'manager'] },
        { title: "การตั้งค่าระบบ", route: '/settings/system', roles: ['admin'] },
        { title: "การตั้งค่าการแจ้งเตือน", route: '/settings/notifications', roles: ['admin', 'user', 'manager'] }
      ]
    },
    {
      title: "การจัดการเนื้อหา",
      icon: "file",
      roles: ['admin', 'editor'],
      subMenu: [
        { title: "จัดการโพสต์", route: '/content-management/posts', roles: ['admin', 'editor'] },
        { title: "จัดการหน้า", route: '/content-management/pages', roles: ['admin', 'editor'] },
        {
          groupTitle: "คลังสื่อ",
          subMenu: [
            { title: "ดูสื่อ", route: '/content-management/media/view', roles: ['admin', 'editor'] },
            { title: "อัปโหลดสื่อ", route: '/content-management/media/upload', roles: ['admin', 'editor'] },
            {
              title: "คลังย่อย",
              subMenu: [
                { title: "ตัวเลือกคลัง 1", route: '/content-management/media/library1', roles: ['admin', 'editor'] },
                { title: "ตัวเลือกคลัง 2", route: '/content-management/media/library2', roles: ['admin', 'editor'] },
                {
                  title: "คลังลึก",
                  subMenu: [
                    { title: "ตัวเลือกคลังลึก 1", route: '/content-management/media/deep1', roles: ['admin', 'editor'] },
                    { title: "ตัวเลือกคลังลึก 2", route: '/content-management/media/deep2', roles: ['admin', 'editor'] }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "เมนูนำทางสอง",
      icon: "appstore",
      subMenu: [
        { title: "ตัวเลือก 5", route: '/manager/role' },
        { title: "การตั้งค่าการแจ้งเตือนการตั้งค่าการแจ้งเตือน", route: '/option6' },
        {
          title: "การตั้งค่าการแจ้งเตือนการตั้งค่าการแจ้งเตือน",
          subMenu: [
            { title: "การตั้งค่าการแจ้งเตือนการตั้งค่าการแจ้งเตือน", route: '/option7' },
            { title: "ตัวเลือก 8", route: '/option8' },
            {
              title: "เมนูย่อย",
              subMenu: [
                { title: "ตัวเลือก 9", route: '/option9' },
                { title: "ตัวเลือก 10", route: '/manager/user' }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "ข้อมูลผู้ใช้งาน",
      icon: "mail",
      subMenu: [
        {
          groupTitle: "รายการที่ 1",
          subMenu: [
            { title: "ตัวเลือก 1", route: '/manager/user' },
            { title: "ตัวเลือก 2", route: '/manager/role' }
          ]
        },
        {
          groupTitle: "รายการที่ 2",
          subMenu: [
            { title: "ตัวเลือก 3", route: '/option3' },
            { title: "ตัวเลือก 4", route: '/option4' }
          ]
        }
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
