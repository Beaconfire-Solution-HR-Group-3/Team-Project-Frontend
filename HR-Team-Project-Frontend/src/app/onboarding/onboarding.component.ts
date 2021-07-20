import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  email:string
  filedata:any
  firstName:string
  lastName:string
  preferName:string
  tel:string
  ssn:string
  bday:string
  gender:string
  telName: string
  file: string
  constructor(private http: HttpClient) 
  {
    this.email="";
    this.firstName="";
    this.lastName="";
    this.preferName="";
    this.tel="";
    this.ssn="";
    this.bday="";
    this.gender="";
    this.telName="";
    this.file="";
  }

  ngOnInit(): void {
    
  }

  onSubmit() {

    let headers = new HttpHeaders({
      "Allow-Cross-Origin-Origin0": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/register";

    this.http.post<any>(endpoint, 
    {"email": this.email,
    "firstName": this.firstName, 
    "lastName": this.lastName,
    "preferName": this.preferName,
    "tel": this.tel,
    "ssn": this.ssn,
    "dbay": this.bday,
    "gender": this.gender
  }, options).subscribe(data => 
    console.log(data));

  }

}
