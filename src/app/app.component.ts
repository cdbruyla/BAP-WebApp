import { BlobInService } from './blob-in.service'
import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';

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

  private calculateProgress() {
  }
}
export class ProgressBarConfigurableExample {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
