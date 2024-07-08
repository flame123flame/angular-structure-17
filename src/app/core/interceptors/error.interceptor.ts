import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleError(error);
        return throwError(() => new Error(error.message));
      })
    );
  }

  private handleError(error: HttpErrorResponse): void {
    console.log("error ==== ", error);

    if (error.status === 403) {
      this.router.navigate(['/exception/403']);
    } else if (error.status === 404) {
      this.router.navigate(['/exception/404']);
    } else if (error.status === 500) {
      this.router.navigate(['/exception/500']);
    } else {
      // Handle other errors if needed
    }
  }
}
