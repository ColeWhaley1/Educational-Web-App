import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/frontend/app.config';
import { AppComponent } from './app/frontend/app.component';
bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
//# sourceMappingURL=main.js.map