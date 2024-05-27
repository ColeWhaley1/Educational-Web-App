import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.component';
export const appConfig = {
    providers: [importProvidersFrom(RouterModule.forRoot(routes))]
};
//# sourceMappingURL=app.config.js.map