import { ErrorHandler, Injectable } from '@angular/core';
import { DefaultAzureCredential } from "@azure/identity";
import { BlobServiceClient, ContainerClient } from '@azure/storage-blob';

@Injectable({
  providedIn: 'root'
})
export class BlobInService {

  storageAccount = "storagebap";
  storageContainer = "bap-storage-container";

  public async listBlobs(): Promise<Map<string, Array<string>>> {
    let map = new Map<string, Array<string>>();

    let blobs = this.containerClient().listBlobsFlat();
    let current_elID = "";
    let currentArray = new Array<string>();
    for await (const blob of blobs) {
      let elID = blob.name.split("/");
      if(!(current_elID === elID[0]) && !(current_elID === "")) {
        map.set(current_elID, currentArray);
        currentArray = new Array<string>();
      }
      if(!map.has(elID[0])) {
        current_elID = elID[0];
      }
      currentArray.push(elID[1].replace(".json", ""));
    }
    map.set(current_elID, currentArray);
    return map;
  }

  private containerClient(): ContainerClient {
    return new BlobServiceClient(`https://${this.storageAccount}.blob.core.windows.net?`)
            .getContainerClient(this.storageContainer);
  }
}
