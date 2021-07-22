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
  middleName:string
  preferName:string
  tel:string
  workPhone:string
  ssn:string
  bday:string
  gender:string
  telName: string
  file: string
  sday:string
  eday:string
  workfile:string
  isGreenCard:boolean = false;
  isDriveLicense:string = "";
  driveNumber:string;
  expiraDay:string;
  driveLicense:string;
  reffirstName:string;
  refmiddleName:string;
  reflastName:string;
  reftelName:string;
  refemail:string;
  relationship:string;
  emfirstName:string;
  emmiddleName:string;
  emlastName:string;
  emtelName:string;
  ememail:string;
  emrelationship:string;

  constructor(private http: HttpClient) 
  {
    this.email="";
    this.firstName="";
    this.lastName="";
    this.middleName="";
    this.preferName="";
    this.tel="";
    this.workPhone="";
    this.ssn="";
    this.bday="";
    this.gender="";
    this.telName="";
    this.file="";
    this.sday="";
    this.eday="";
    this.workfile="";
    this.driveNumber="";
    this.expiraDay="";
    this.driveLicense="";
    this.reffirstName="";
    this.refmiddleName="";
    this.reflastName="";
    this.reftelName="";
    this.refemail="";
    this.relationship="";
    this.emfirstName="";
    this.emmiddleName="";
    this.emlastName="";
    this.emtelName="";
    this.ememail="";
    this.emrelationship="";
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
