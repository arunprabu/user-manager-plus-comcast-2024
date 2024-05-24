// node_modules imports
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// custom import
import { AppModule } from './app/app.module';

// ng app is bootstrapped with a module -- AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
