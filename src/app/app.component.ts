import { BlobInService} from './blob-in.service'
import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
export class ProgressBarConfigurableExample {
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}

const firebaseConfig = {
  apiKey: "AIzaSyA5uANDvA03nwnHhB5I0mJ-e805v5KfaxI",
  authDomain: "angularwebappbap.firebaseapp.com",
  projectId: "angularwebappbap",
  storageBucket: "angularwebappbap.appspot.com",
  messagingSenderId: "631292642489",
  appId: "1:631292642489:web:bfd8fa0878057988be4768",
  measurementId: "G-3371BBSLW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
