import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { document } from '../../pojo/document';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { SharedServiceService } from '../../service/shared-service.service'
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-six-opt-stem-ead',
  templateUrl: './six-opt-stem-ead.component.html',
  styleUrls: ['./six-opt-stem-ead.component.css']
})
export class SixOptStemEadComponent implements OnInit {

  show:boolean = false;
  documentList: document[] = [];
  currentStatus="OPT_STEM_EAD";
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
      this.router.navigate(['visaManage/final']);
  }

  showFunc(){
    this.show = true;
  }

  hideFunc(){
    this.show = false;
  }

  download(title: string){

    console.log("download");
    this.downloadReport(title).subscribe(blob => saveAs(blob, title));
  
 
     }
 
     downloadReport(title:string): Observable<any> {
       // Create url
       let endpoint = "http://localhost:8080/document/download";
       var body = { "title": title };
     
       return this.http.post(endpoint, body, {
         responseType: "blob",
         headers: new HttpHeaders().append("Content-Type", "application/json").append("Access-Control-Allow-Origin", "*")
       });
     }
 
   upload(event:any, title:string)
   {
     console.log("upload");
     let endpoint = "http://localhost:8080/document/upload";
     let fileList: FileList = event.target.files;
     if(fileList.length > 0) {
         let file: File = fileList[0];
         let formData:FormData = new FormData();
         formData.append('file', file, file.name);
         formData.append('title', title);
         formData.append('email', this.sharedServiceService.email);
         this.http.post(endpoint, formData, {headers: new HttpHeaders()
             .append("Content-Type", "multipart/form-data")
             .append('Accept', 'application/json')
             .append("Access-Control-Allow-Origin", "*")})
             .subscribe(
                 data => console.log('success'),
                 error => console.log(error)
             )
     }
   }

}
