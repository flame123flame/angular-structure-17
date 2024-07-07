import { Routes } from "@angular/router";
import { AuthGuard } from "../../core/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent)
  },
];

export default routes;
