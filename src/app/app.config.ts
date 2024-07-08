import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { apiInterceptor } from './core/interceptors/api.interceptor';

import { SpinnerInterceptorService } from './core/services/spinner-interceptor.service';
import { AuthGuard } from './core/guard/auth.guard';
import { NoAuthGuard } from './core/guard/no-auth.guard';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';


registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      // withHashLocation() #ถ้าเปิดตัวนี้จะมี # บน url
    ),
    provideNzIcons(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule, ReactiveFormsModule),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([apiInterceptor])), // Include interceptors from DI
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    NoAuthGuard,
    AuthGuard

  ]
};
