import { Injectable } from '@angular/core';
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
    let currentID = "";
    let currentArray = new Array<string>();
    for await (const blob of blobs) {
      let elID = blob.name.split("/");
      if(!(currentID === elID[0]) && !(currentID === "")) {
        map.set(currentID, currentArray);
        currentArray = new Array<string>();
      }
      if(!map.has(elID[0])) {
        currentID = elID[0];
      }
      currentArray.push(elID[1].replace(".json", ""));
    }
    map.set(currentID, currentArray);
    return map;
  }

  private containerClient(): ContainerClient {
    return new BlobServiceClient(`https://${this.storageAccount}.blob.core.windows.net?`)
            .getContainerClient(this.storageContainer);
  }
}
