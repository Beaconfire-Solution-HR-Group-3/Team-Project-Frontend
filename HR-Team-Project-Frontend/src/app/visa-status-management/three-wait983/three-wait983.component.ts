import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { document } from '../../pojo/document';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs';
import { SharedServiceService } from '../../service/shared-service.service'
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-three-wait983',
  templateUrl: './three-wait983.component.html',
  styleUrls: ['./three-wait983.component.css']
})
export class ThreeWait983Component implements OnInit {
  show:boolean = false;
  documentList: document[] = [];
  currentStatus="OPT_EAD";
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
      this.router.navigate(['visaManage/4']);
  }

  showFunc(){
    this.show = true;
  }

  hideFunc(){
    this.show = false;
  }

}
