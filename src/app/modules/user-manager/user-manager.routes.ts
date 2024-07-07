import { Routes } from "@angular/router";
import { AuthGuard } from "../../core/guard/auth.guard";

const routes: Routes = [
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/user/user.component').then(c => c.UserComponent),
  },
  {
    path: 'role',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/role/role.component').then(c => c.RoleComponent)
  },
];

export default routes;


