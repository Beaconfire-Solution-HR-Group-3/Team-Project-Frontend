import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service'
@Component({
  selector: 'app-check-token',
  templateUrl: './check-token.component.html',
  styleUrls: ['./check-token.component.css']
})
export class CheckTokenComponent implements OnInit {

  token:string;
  constructor(private http: HttpClient, private router: Router, private sharedServiceService :SharedServiceService) 
  {
    this.token="";
   }

  ngOnInit(): void {

  }
  onSubmit() {

    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/checkToken";
    console.log(this.token);
    this.http.post<any>(endpoint, 
    {"token": this.token}, options).subscribe(data => {
      this.sharedServiceService.email=data.email;
      this.router.navigate(['checkUserName']);
    });

  }
}
