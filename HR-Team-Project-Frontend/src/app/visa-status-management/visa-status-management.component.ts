import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-visa-status-management',
  templateUrl: './visa-status-management.component.html',
  styleUrls: ['./visa-status-management.component.css']
})
export class VisaStatusManagementComponent implements OnInit {

  nextStatus:string;
  constructor(private http: HttpClient, private router: Router, private sharedServiceService :SharedServiceService) { 
    this.nextStatus = "";
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

    this.router.navigate(['visaManage/1']);
    /*let headers = new HttpHeaders({
      "Allow-Cross-Origin-Origin0": "*" });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/getNextStatus"; 

    this.http.get<any>(endpoint, options).subscribe(data => 
    {
      //console.log(data);
      //this.nextStatus = 'visaManage/' + data.nextStatus;
      this.router.navigate(['visaManage/one']);

    });*/
   
  }


}
