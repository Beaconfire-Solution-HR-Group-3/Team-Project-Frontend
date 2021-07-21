import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-check-token',
  templateUrl: './check-token.component.html',
  styleUrls: ['./check-token.component.css']
})
export class CheckTokenComponent implements OnInit {

  token:string
  constructor(private http: HttpClient) 
  {
    this.token="";
   }

  ngOnInit(): void {

  }
  onSubmit() {

    let headers = new HttpHeaders({
      "Allow-Cross-Origin-Origin0": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/checkToken";

    this.http.post<any>(endpoint, 
    {"token": this.token}, options).subscribe(data => 
    console.log(data));

  }
}
