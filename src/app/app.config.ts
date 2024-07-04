import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './core/interceptors/api.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';

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
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([
        apiInterceptor,
        errorInterceptor
        // { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
      ])
    ),
  ]
};


