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
  buttons?: Button[];
}

interface Button {
  id: number;

}

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [NgZorroAntdModule, RouterOutlet, CommonModule, RouterModule],
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
      buttons: [
        { id: 1 }
      ],
    },
    {
      title: "การจัดการผู้ใช้",
      icon: "user",
      subMenu: [
        {
          title: "จัดการผู้ใช้", route: '/user-management/users', buttons: [
            { id: 1 }
          ],
        },
        {
          title: "จัดการสิทการใช้งาน", route: '/user-management/roles', buttons: [
            { id: 1 }
          ],
        },
        {
          title: "ดูประวัติการเข้าสู่ระบบ", route: '/user-management/user-activity', buttons: [
            { id: 1 }
          ],
        },
        {
          groupTitle: "เมนูการใช้งาน",
          subMenu: [
            {
              title: "เมนูในระบบ", route: '/user-management/menus', buttons: [
                { id: 1 }
              ],
            },
            {
              title: "ปุ่มในระบบ", route: '/user-management/buttons', buttons: [
                { id: 1 }
              ],
            }
          ]
        },
        {
          title: "การตั้งค่าการแจ้งเตือนการตั้งค่าการแจ้งเตือน",
          subMenu: [
            {
              title: "การตั้งค่าการแจ้งเตือนการตั้งค่าการแจ้งเตือน", route: '/option7', buttons: [
                { id: 1 }
              ],
            },
            {
              title: "ตัวเลือก 8", route: '/option8', buttons: [
                { id: 1 }
              ],
            },
            {
              title: "เมนูย่อย",
              subMenu: [
                {
                  title: "ตัวเลือก 9", route: '/option9', buttons: [
                    { id: 1 }
                  ],
                },
                {
                  title: "ตัวเลือก 10", route: '/manager/user', buttons: [
                    { id: 1 }
                  ],
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "การตั้งค่า",
      icon: "setting",
      subMenu: [
        {
          title: "การตั้งค่าโปรไฟล์", route: '/settings/profile', buttons: [
            { id: 1 }
          ],
        },
        {
          title: "การตั้งค่าระบบ", route: '/settings/system', buttons: [
            { id: 1 }
          ],
        },
        {
          title: "การตั้งค่าการแจ้งเตือน", route: '/settings/notifications', buttons: [
            { id: 1 }
          ],
        }
      ]
    },
    {
      title: "การจัดการเนื้อหา",
      icon: "file",
      subMenu: [
        {
          title: "จัดการโพสต์", route: '/content-management/posts', buttons: [
            { id: 1 }
          ],
        },
        {
          title: "จัดการหน้า", route: '/content-management/pages', buttons: [
            { id: 1 }
          ],
        },
        {
          groupTitle: "คลังสื่อ",
          subMenu: [
            { title: "ดูสื่อ", route: '/content-management/media/view', buttons: [] },
            { title: "อัปโหลดสื่อ", route: '/content-management/media/upload', buttons: [] },
            {
              title: "คลังย่อย",
              subMenu: [
                { title: "ตัวเลือกคลัง 1", route: '/content-management/media/library1', buttons: [] },
                { title: "ตัวเลือกคลัง 2", route: '/content-management/media/library2', buttons: [] },
                {
                  title: "คลังลึก",
                  subMenu: [
                    { title: "ตัวเลือกคลังลึก 1", route: '/content-management/media/deep1', buttons: [] },
                    { title: "ตัวเลือกคลังลึก 2", route: '/content-management/media/deep2', buttons: [] }
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
        { title: "ตัวเลือก 5", route: '/manager/role', buttons: [] },
        { title: "การตั้งค่าการแจ้งเตือนการตั้งค่าการแจ้งเตือน", route: '/option6', buttons: [] },
        {
          title: "การตั้งค่าการแจ้งเตือนการตั้งค่าการแจ้งเตือน",
          subMenu: [
            { title: "การตั้งค่าการแจ้งเตือนการตั้งค่าการแจ้งเตือน", route: '/option7', buttons: [] },
            { title: "ตัวเลือก 8", route: '/option8', buttons: [] },
            {
              title: "เมนูย่อย",
              subMenu: [
                { title: "ตัวเลือก 9", route: '/option9', buttons: [] },
                { title: "ตัวเลือก 10", route: '/manager/user', buttons: [] }
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
            { title: "ตัวเลือก 1", route: '/manager/user', buttons: [] },
            { title: "ตัวเลือก 2", route: '/manager/role', buttons: [] }
          ]
        },
        {
          groupTitle: "รายการที่ 2",
          subMenu: [
            { title: "ตัวเลือก 3", route: '/option3', buttons: [] },
            { title: "ตัวเลือก 4", route: '/option4', buttons: [] }
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
