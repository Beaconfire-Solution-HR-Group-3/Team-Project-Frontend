import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  
  username: string;
  email: string;
  
  constructor() { 
    this.username = "";
    this.email = "HannahChen@gmail.com";
  }
  
}
