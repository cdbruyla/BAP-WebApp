import { Component } from '@angular/core';
import { BlobInService} from './blob-in.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  blobList: string[] = [];

  constructor(private blobService: BlobInService) {}

  ngOnInit(): void {
    this.reloadBlobList();
  }

  private reloadBlobList() {
    this.blobService.listBlobs().then(list => {
      this.blobList = list
    })
  }
}
