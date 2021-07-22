import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {document} from '../pojo/document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documentList: document[] = [];

  constructor(private http: HttpClient) { }

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

  download(title: string){

   console.log("download");
   let headers = new HttpHeaders({
    "Access-Control-Allow-Origin": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/document/download";

    this.http.post<any>(endpoint, 
    {"title": title}, options).subscribe(data => 
      {
        console.log(data);
        //this.router.navigate(['onboarding']);
      });
 

    }

  upload()
  {
    console.log("upload");
  }
}
