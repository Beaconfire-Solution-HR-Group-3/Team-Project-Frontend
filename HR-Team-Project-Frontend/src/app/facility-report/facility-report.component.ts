import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-facility-report',
  templateUrl: './facility-report.component.html',
  styleUrls: ['./facility-report.component.css']
})
export class FacilityReportComponent implements OnInit {


  title:string
  description:string
  constructor(private http: HttpClient, private router: Router) 
  {
    this.title="";
    this.description="";
  }

  ngOnInit(): void {
  }

}
