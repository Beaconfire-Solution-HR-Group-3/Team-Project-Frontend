import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {

  email:string;
  successGenerate = false;
  sent = false;

  constructor(private http: HttpClient, private router: Router) {
    this.email="";
   }

  ngOnInit(): void {
  }

  Generate(){
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/token";

    this.http.post<any>(endpoint, {"email": this.email}, options).subscribe(data => 
    {
      this.sent = true;
      if(data.statusCode == "OK"){
        this.successGenerate = true;
      }
      
    });

  }

}
