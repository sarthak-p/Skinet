import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    importProvidersFrom(HttpClientModule), // Add HttpClientModule here
    ...(appConfig.providers || [])
  ]
}).catch((err) => console.error(err));
