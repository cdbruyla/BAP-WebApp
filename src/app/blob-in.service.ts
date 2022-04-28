import { ErrorHandler, Injectable } from '@angular/core';
import { DefaultAzureCredential } from "@azure/identity";
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root'
})
export class BlobInService {

  storageAccount = "storagebap";
  storageContainer = "bap-storage-container";

  public async listBlobs(): Promise<string[]> {
    let result: string[] = []

    let blobs = this.containerClient().listBlobsFlat();
    for await (const blob of blobs) {
      result.push(blob.name)
    }

    return result;
  }

  private containerClient(): ContainerClient {
    return new BlobServiceClient(`https://${this.storageAccount}.blob.core.windows.net?`)
            .getContainerClient(this.storageContainer);
  }
}
