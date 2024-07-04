import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/auth' },
  {
    path: "auth",
    loadChildren: () => import("./modules/authentication/authentication.routes")
  },
  {
    path: 'feature',
    component: LayoutsComponent,
    children: [
      { path: '', redirectTo: 'feature/dashboard', pathMatch: 'full' },
      {
        path: "dashboard",
        loadChildren: () => import("./modules/dashboard/dashboard.routes")
      },
    ]
  }
];
