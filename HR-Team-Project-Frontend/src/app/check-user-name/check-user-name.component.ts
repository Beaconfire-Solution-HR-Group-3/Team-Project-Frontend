import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-check-token',
  templateUrl: './check-token.component.html',
  styleUrls: ['./check-token.component.css']
})
export class CheckTokenComponent implements OnInit {

  userName:string
  password:string
  constructor(private http: HttpClient) 
  {
    this.userName="";
    this.password="";
   }

  ngOnInit(): void {

  }
  onSubmit() {

    let headers = new HttpHeaders({
      "Allow-Cross-Origin-Origin0": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/checkUserName";

    this.http.post<any>(endpoint, 
    {"userName": this.userName,"password":this.password}, options).subscribe(data => 
    console.log(data));

  }
}
