import { BlobInService } from './blob-in.service'
import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  blobMap = new Map<string, Array<string>>();

  constructor(private blobService: BlobInService) {}

  ngOnInit(): void {
    this.reloadBlobList();
  }

  private reloadBlobList() {
    this.blobService.listBlobs().then(map => {
      this.blobMap = map
    })
  }
}
