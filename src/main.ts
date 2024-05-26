import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import dotenv from 'dotenv';

dotenv.config(); // use to secure credentials

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
