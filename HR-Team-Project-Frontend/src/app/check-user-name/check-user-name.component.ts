import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-check-user-name',
  templateUrl: './check-user-name.component.html',
  styleUrls: ['./check-user-name.component.css']
})
export class CheckUserNameComponent implements OnInit {

  userName:string
  password:string
  constructor(private http: HttpClient, private router: Router) 
  {
    this.userName="";
    this.password="";
  }

  ngOnInit(): void {

  }
  onSubmit() {

    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/checkUserName";

    this.http.post<any>(endpoint, 
    {"userName": this.userName,"password":this.password}, options).subscribe(data => 
      {
        console.log(data);
        this.router.navigate(['onboarding']);
      });
   

  }
}
