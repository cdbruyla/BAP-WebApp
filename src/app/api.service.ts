import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class ApiService {

  constructor(private http: HttpClient) {   }

  postData(payload: string, API_URL:string) : void {
    this.http.post(API_URL, payload);
  }
}

