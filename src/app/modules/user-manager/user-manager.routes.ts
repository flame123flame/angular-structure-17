import { Routes } from "@angular/router";
import { AuthGuard } from "../../core/guard/auth.guard";

const routes: Routes = [
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/user/user.component').then(c => c.UserComponent),
  },
  {
    path: 'roles',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/role/role.component').then(c => c.RoleComponent)
  },
];

export default routes;


