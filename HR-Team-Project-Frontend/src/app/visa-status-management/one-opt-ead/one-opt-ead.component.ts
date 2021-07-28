import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { document } from '../../pojo/document';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { SharedServiceService } from '../../service/shared-service.service'
import { RouterModule, Routes, Router } from '@angular/router';

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-one-opt-ead',
  templateUrl: './one-opt-ead.component.html',
  styleUrls: ['./one-opt-ead.component.css']
})


export class OneOptEadComponent implements OnInit {
  show:boolean = false;
  documentList: document[] = [];
  currentStatus="OPT_EAD";
  fileToUpload: File | null = null;
  constructor(private http: HttpClient, private router: Router, private sharedServiceService :SharedServiceService) { }

  ngOnInit(): void {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/document";

    this.http.get<any>(endpoint, options).subscribe(data => 
    { 
      data.forEach((element: document) => {
        this.documentList.push(element);
      });
      
    });
  }

  Next(){
      this.router.navigate(['visaManage/2']);
  }

  showFunc(){
    this.show = true;
  }

  hideFunc(){
    this.show = false;
  }

  
 
   upload(event: Event, title:string)
   {
    const target= event.target as HTMLInputElement;
    if(target.files){
      this.fileToUpload = target.files.item(0);
    }
     if (this.fileToUpload !== null) {
      this.postFile(this.fileToUpload, title).subscribe(data =>
        {
          console.log("succeed!");
        })
  }
    
    
   }

   postFile(fileToUpload: File, title:string): Observable<any> {
    const endpoint = 'http://localhost:8080/document/upload';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload);
    formData.append('title', title);
    formData.append('email', this.sharedServiceService.email);
    return this.http
      .post(endpoint, formData, { headers: new HttpHeaders()
        .append("Content-Type", "multipart/form-data; boundary=<calculated when request is sent>")
        .append('Accept', '*/*')
        .append("Access-Control-Allow-Origin", "*") });
}

}
