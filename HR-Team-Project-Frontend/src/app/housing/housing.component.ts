import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { SharedServiceService } from '../service/shared-service.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {
  address:string;
  employeeList: any[] = [];
  email:string;

  constructor(private http: HttpClient, private router: Router, private sharedServiceService :SharedServiceService) { 
    this.email=this.sharedServiceService.email;
    this.address="";

  }

  ngOnInit(): void {
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    });
    let options = { headers: headers };

    let endpoint = "http://localhost:8080/House/" + this.email;

    this.http.get<any>(endpoint, options).subscribe(data => 
      {
        this.address=data.address
        data.employeeList.forEach(
          (element: any) => {
          this.employeeList.push(element);
        })
      }
    );
    

  
  }

}
