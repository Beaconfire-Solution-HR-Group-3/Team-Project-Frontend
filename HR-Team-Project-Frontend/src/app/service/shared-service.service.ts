import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  
  username: string;
  email: string;
  reportId:number;
  
  constructor() { 
    this.username = "Hannah";
    this.email = "HannahChen@gmail.com";
    this.reportId = 1;
  }
  
}
