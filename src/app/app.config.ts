import { ApplicationConfig } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { routes } from './app.route';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()],
};
