import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SharedServiceService } from '../service/shared-service.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-facility-comment',
  templateUrl: './facility-comment.component.html',
  styleUrls: ['./facility-comment.component.css'],
  providers: [DatePipe]
})
export class FacilityCommentComponent implements OnInit {

  comment:string
  details: any[] = [];
  myDate = new Date();
  test:string;
  constructor(private http: HttpClient, private router: Router, private sharedServiceService :SharedServiceService, private route: ActivatedRoute, private datePipe: DatePipe) 
  {
    this.comment="";
    this.test="";
    let date = this.datePipe.transform(this.myDate, 'MM-dd-yyyy');
    if(date){
      this.test = date;
    }
  }

  ngOnInit(): void {

    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    });
    let options = { headers: headers };

    this.http.post<any>("http://localhost:8080/reportDetail", {"id": this.sharedServiceService.reportId}, options).subscribe(data => 
      {
        data.forEach(
          (element: any) => {
          this.details.push(element);
        })
      }
    );

  }
  onSubmit(){
    let headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*"
    });
    let options = { headers: headers };

    this.http.post<any>("http://localhost:8080/comment/" + this.sharedServiceService.reportId, {"comments": this.comment, "createDate":this.test}, options).subscribe(data => 
      {
        window.location.href="http://localhost:4200/facilitycomment";
      }
    );

  }

}
