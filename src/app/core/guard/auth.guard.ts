import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return true;
  }

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   const isAuthenticated = this.authService.isAuthenticated();
  //   if (isAuthenticated) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']); // เปลี่ยนไปยังหน้า login ถ้าไม่ได้รับอนุญาต
  //     return false;
  //   }
  // }
}