import { Routes } from "@angular/router";
import { AuthGuard } from "../../core/guard/auth.guard";

const routes: Routes = [
  {
    path: 'users',
    data: { breadcrumb: 'จัดการผู้ใช้' },
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/user/user.component').then(c => c.UserComponent),
  },
  {
    path: 'roles',
    data: { breadcrumb: 'จัดการบทบาท' },
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/role/role.component').then(c => c.RoleComponent)
  },
  {
    path: 'menus',
    data: { breadcrumb: 'จัดการบทบาท' },
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/menus/menus.component').then(c => c.MenusComponent)
  },
  {
    path: 'create-menus',
    data: { breadcrumb: 'สร้างเมนู' },
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/create-menus/create-menus.component').then(c => c.CreateMenusComponent)
  },
  {
    path: 'buttons',
    data: { breadcrumb: 'ปุ่มการใช้งาน' },
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/buttons/buttons.component').then(c => c.ButtonsComponent)
  },
  {
    path: 'user-activity',
    data: { breadcrumb: 'ปุ่มการใช้งาน' },
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/user-activity/user-activity.component').then(c => c.UserActivityComponent)
  },
];

export default routes;


