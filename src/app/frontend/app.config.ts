import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))]
};
