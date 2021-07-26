import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { SharedServiceService } from '../service/shared-service.service';
import { RouterModule, Routes, Router } from '@angular/router';

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
   addressLine1:string
   addressLine2:string
   city:string
   stateAbbr:string
   stateName:string
   zipCode:string
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
   visaType:string;
  isOther:string = "";
  workAuthOther:string;

  constructor(private http: HttpClient, private router: Router, private sharedServiceService :SharedServiceService) 
  {
    this.email=this.sharedServiceService.email;
    this.firstName="";
    this.lastName="";
    this.middleName="";
    this.preferName="";
    this.addressLine1="";
    this.addressLine2="";
    this.city="";
    this.stateAbbr="";
    this.stateName="";
    this.zipCode="";
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
    this.visaType="";
    this.workAuthOther="";
  }

  ngOnInit(): void {
    
  }

  onSubmit() {

    let headers = new HttpHeaders({
      "Allow-Cross-Origin-Origin0": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/register";

    if(this.workAuthOther != ""){
      this.visaType=this.workAuthOther;
    }

    this.http.post<any>(endpoint, 
    {"email": this.email,
    "firstName": this.firstName, 
    "middleName": this.middleName,
    "lastName": this.lastName,
    "preferedName": this.preferName,
    "alternatePhone": this.workPhone,
    "cellphone": this.telName,
    "ssn": this.ssn,
    "dob": this.bday,
    "gender": this.gender,
    "startDate": this.sday,
    "endDate": this.eday,
    "driverLisence": this.driveLicense,
    "contactList":[{
        "fisrtName": this.emfirstName,
        "lastName": this.emlastName,
        "email": this.ememail,
        "cellphone": this.emtelName,
        "relationship": this.emrelationship,
        "isReference": false,
        "isEmergency": true
    },
    {
      "fisrtName": this.reffirstName,
      "lastName": this.reflastName,
      "email": this.refemail,
      "cellphone": this.reftelName,
      "relationship": this.relationship,
      "isReference": true,
      "isEmergency": false
    }
  ],
    "visaStatus":{
      "visaType": this.visaType,
      "visaStartDate": this.sday,
      "visaEndDate": this.eday,
    },
    "address": {
        "addressLine1": this.addressLine1,
        "addressLine2": this.addressLine2,
        "city": this.city,
        "stateAbbr": this.stateAbbr,
        "stateName": this.stateName,
        "zipCode": this.zipCode
        }
  }, options).subscribe(data => 
    console.log(data));
    this.router.navigate(['visaManage/1']);

  }

}
