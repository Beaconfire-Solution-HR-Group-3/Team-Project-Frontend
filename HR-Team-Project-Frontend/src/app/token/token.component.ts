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

  constructor(private http: HttpClient, private router: Router) {
    this.email="";
   }

  ngOnInit(): void {
  }

  Generate(){
    let headers = new HttpHeaders({
      "Allow-Cross-Origin-Origin0": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/token";

    this.http.post<any>(endpoint, 
    {"email": this.email}, options).subscribe(data => 
    {
      console.log(data);
      //this.router.navigate(['home']);
    });

  }

}
