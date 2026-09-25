import { bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, RouteReuseStrategy, provideRouter, withPreloading } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';
import { register } from 'swiper/element/bundle'; // <--- IMPORT REGISTER HERE

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

register(); // <--- INIT SWIPER HERE

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
}).catch((err) => console.log(err));
