import { BlobInService } from './blob-in.service'
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {

  blobMap = new Map<string, Array<string>>();
  private API_URL = "http://localhost:7071/api/HttpTrigger";

  public newEID : number = 0;
  public newDMID : number = 0;
  public showSent = false;


  constructor(private blobService: BlobInService, private apiService: ApiService) {}

  ngOnInit(): void {
    this.reloadBlobList();
  }

  processData(EID: number, ctrl : string, newEID: number, newDMID : number) : string {
    const payloadData : string =`payload = ${EID};${ctrl};${newEID};${newDMID}`;
    return payloadData;
  }

  private reloadBlobList() {
    this.blobService.listBlobs().then(map => {
      this.blobMap = map
    })
  }

  public setInfoAndPost(ctrl : string, EID : number) : void {
    const payload : string = this.processData(EID, ctrl, this.newEID, this.newDMID);
    this.apiService.postData(this.API_URL, payload);
    this.showSent = true;
  }
}



