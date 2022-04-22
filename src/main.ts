import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { DefaultAzureCredential } from "@azure/identity";
import { BlobServiceClient } from "@azure/storage-blob";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const namespace = "DefaultEndpointsProtocol=https;AccountName=storagebap;AccountKey=I5M3OOteAjwcZ+jlsy8Bd+tnwiFqoYGGK7d2t4XdZM7HFerlej4tDaVgUCXWGW/eFt3S/AUHJc3Bmm2oNs25LA==;EndpointSuffix=core.windows.net";
const defaultAzureCredential = new DefaultAzureCredential();
const containerName = "bap-storage-container";
const storageAccount = "bapstorage";

const blobServiceClient = new BlobServiceClient(
  `https://${storageAccount}.blob.core.windows.net`,
  defaultAzureCredential
);


async function main() {
  const containerClient = blobServiceClient.getContainerClient(containerName);

  let i = 1;
  let blobs = containerClient.listBlobsFlat();
  for await (const blob of blobs) {
    console.log(`Blob ${i++}: ${blob.name}`);
  }
}

main();
