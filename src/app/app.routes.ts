import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { NoAuthGuard } from './core/guard/no-auth.guard';
import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth' },
  {
    path: "auth",
    loadChildren: () => import("./modules/authentication/authentication.routes"),
    canActivate: [NoAuthGuard],
  },

  {
    path: '',
    component: LayoutsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: '',
        loadChildren: () => import("./modules/dashboard/dashboard.routes")
      },
      {
        path: "exception",
        loadChildren: () => import("./core/common/common.routes"),
        canActivate: [NoAuthGuard],
      },
      {
        path: "user-management",
        data: { breadcrumb: 'การจัดการผู้ใช้' },
        loadChildren: () => import("./modules/user-manager/user-manager.routes")
      }
    ]
  }
];
