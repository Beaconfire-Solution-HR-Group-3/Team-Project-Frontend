import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-facility-comment',
  templateUrl: './facility-comment.component.html',
  styleUrls: ['./facility-comment.component.css']
})
export class FacilityCommentComponent implements OnInit {

  comment:string
  constructor(private http: HttpClient, private router: Router) 
  {
    this.comment="";
  }

  ngOnInit(): void {
  }

}
