import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import { BlobServiceClient } from "@azure/storage-blob";

const connStr = "<connection string>";
const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
