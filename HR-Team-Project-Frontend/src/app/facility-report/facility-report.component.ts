import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-facility-report',
  templateUrl: './facility-report.component.html',
  styleUrls: ['./facility-report.component.css'],
  providers: [DatePipe]
})
export class FacilityReportComponent implements OnInit {

  report: any[] = [];
  title:string
  description:string
  myDate = new Date();
  test:string;
  constructor(private http: HttpClient, private router: Router, private sharedServiceService :SharedServiceService, private datePipe: DatePipe) 
  {
    this.title="";
    this.description="";
    this.test="";
    let date = this.datePipe.transform(this.myDate, 'MM-dd-yyyy');
    if(date){
      this.test = date;
    }
  }

  ngOnInit(): void {
    // let headers1 = new HttpHeaders({
    //   "Access-Control-Allow-Origin": "*"
    // });
    // let options1 = { headers: headers1 };

    // let endpoint1 = "http://localhost:8080/employee";

    // this.http.get<any>(endpoint1, options1).subscribe(data => 
    // { 
    //     if(data.success == false){
    //       window.location.href="http://localhost:4201/login?redirect="+data.message;
    //     }
    // });

    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/reports";

    this.http.get<any>(endpoint, options).subscribe(data => 
      {
        data.forEach(
          (element: any) => {
          this.report.push(element);
        })
      }
    );
  }

  onSubmit() {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/reports";

    this.http.post<any>(endpoint, 
    {"title": this.title,"reportDate":this.test, "status": "Open", "description": this.description}, options).subscribe(data => 
      {
        window.location.href="http://localhost:4200/facilityreport";
      });
  }

  redirect(id:number){
    this.sharedServiceService.reportId = id;
    this.router.navigate(['facilitycomment']);
  }
}
