// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { SportsAppAppComponent, environment } from './app/';
// import { appRouterProviders } from './app/app.routes';
// import { AuthGuard } from './app/auth-guard.service';
// import { AuthService }            from './app/auth.service';

// if (environment.production) {
//   enableProdMode();
// }

// bootstrap(SportsAppAppComponent, [AuthService, AuthGuard,        
//     appRouterProviders
// ]);


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
