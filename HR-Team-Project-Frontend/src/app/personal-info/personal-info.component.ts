import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { SharedServiceService } from '../service/shared-service.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
  providers: [DatePipe]
})
export class PersonalInfoComponent implements OnInit {
  bday:string
  file:string
  workauth:string
  wsd:string
  wed:string
  esd:string
  eed:string
  email:string
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
   gender:string
   telName: string
   emfirstName:string;
   emlastName:string;
   emtelName:string;
   ememail:string;
   emrelationship:string;
   test: string; 
   myDate = new Date();
   age: number;
   id:number;
   aid:number;
   eid:number;
   rid:number;
   vid:number;
   reffirstName:string;
  refmiddleName:string;
  reflastName:string;
  reftelName:string;
  refemail:string;
  relationship:string;
  driveLicense:string;
  isFalse:boolean;
  isTrue:boolean;
  constructor(private http: HttpClient, private router: Router, private sharedServiceService :SharedServiceService, private datePipe: DatePipe) { 
    this.bday="";
    this.file="";
    this.workauth="";
    this.wsd="";
    this.esd="";
    this.wed="";
    this.eed="";
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
    this.gender="";
    this.telName="";
    this.emfirstName="";
    this.emlastName="";
    this.emtelName="";
    this.ememail="";
    this.emrelationship="";
    this.test="";
    this.id=0;
    let date = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    if(date){
      this.test = date;
    }
    this.age = 0;
    
    this.reffirstName="";
    this.refmiddleName="";
    this.reflastName="";
    this.reftelName="";
    this.refemail="";
    this.relationship="";
    this.driveLicense="";
    this.aid=0;
    this.eid=0;
    this.rid=0;
    this.vid=0;
    this.isFalse=false;
    this.isTrue=true;


  }

  ngOnInit(): void {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/employee/" + this.email;

    this.http.get<any>(endpoint, options).subscribe(data => 
    { 
      this.id=data.id;
      this.aid = data.address.id;
      this.vid = data.visaStatus.id;
      this.firstName=data.firstName;
      this.lastName=data.lastName;
      this.middleName=data.middleName;
      this.preferName=data.preferedName;
      this.addressLine1=data.address.addressLine1;
      this.addressLine2=data.address.addressLine2;
      this.city=data.address.city;
      this.stateAbbr=data.address.stateAbbr;
      this.stateName=data.address.stateName;
      this.zipCode=data.address.zipCode;
      this.bday=data.dob;
      //this.file="";
      this.workauth=data.visaStatus.visaType;
      this.wsd=data.visaStatus.visaStartDate;
      this.esd=data.startDate;
      this.wed=data.visaStatus.visaEndDate;
      this.eed=data.endDate;
      this.workPhone=data.alternatePhone;
      this.ssn=data.ssn;
      this.gender=data.gender;
      this.telName=data.cellphone;
      data.contactList.forEach(
        (element:any)=>{
        if(element.emergency){
          this.eid = element.id;
          this.emfirstName=element.fisrtName;
          this.emlastName=element.lastName;
          this.emtelName=element.cellphone;
          this.ememail=element.email;
          this.emrelationship=element.relationship;
        }
        if(element.reference){
          this.rid = element.id;
          this.reffirstName=element.fisrtName;;
          this.reflastName=element.lastName;
          this.reftelName=element.cellphone;
          this.refemail=element.email;
          this.relationship=element.relationship;
        }
      });
      var date1 = new Date(this.bday); 
      var date2 = new Date(this.test); 

        var Time = date2.getTime() - date1.getTime(); 
        var days = (1000 * 3600 * 24); 
        var months = Math.floor(days*31);
        var years = Math.floor(Time / (months*12));
        console.log(years);
        this.age = years;
    });

  }

  Submit(){
    console.log("submit")
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/employee";

    this.http.post<any>(endpoint, 
    {
      "id": this.id,
      "email": this.email,
      "firstName": this.firstName, 
      "middleName": this.middleName,
      "lastName": this.lastName,
      "preferedName": this.preferName,
      "alternatePhone": this.workPhone,
      "cellphone": this.telName,
      "ssn": this.ssn,
      "dob": this.bday,
      "gender": this.gender,
      "startDate": this.esd,
      "endDate": this.eed,
      "driverLisence": this.driveLicense,
      "contactList":[{
          "id": this.eid,
          "fisrtName": this.emfirstName,
          "lastName": this.emlastName,
          "email": this.ememail,
          "cellphone": this.emtelName,
          "relationship": this.emrelationship,
          "reference": this.isFalse,
          "emergency": this.isTrue
      },
      {
        "id": this.rid,
        "fisrtName": this.reffirstName,
        "lastName": this.reflastName,
        "email": this.refemail,
        "cellphone": this.reftelName,
        "relationship": this.relationship,
        "reference": this.isTrue,
        "emergency": this.isFalse
      }
    ],
      "visaStatus":{
        "id": this.vid,
        "visaType": this.workauth,
        "visaStartDate": this.wsd,
        "visaEndDate": this.wed,
      },
      "address": {
          "id": this.aid,
          "addressLine1": this.addressLine1,
          "addressLine2": this.addressLine2,
          "city": this.city,
          "stateAbbr": this.stateAbbr,
          "stateName": this.stateName,
          "zipCode": this.zipCode
          }
        
  }, options).subscribe(data => 
    console.log(data));

  }

}
