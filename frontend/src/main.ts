import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), ...appConfig.providers]
})
  .then((ref) => {
    console.log('Angular application bootstrapped');
})
  .catch((err) => console.error(err));
