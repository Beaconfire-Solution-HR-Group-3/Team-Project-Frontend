import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  bday:string
  file:string
  workauth:string
  wsd:string
  wed:string
  esd:string
  eed:string


  constructor() { 
    this.bday="";
    this.file="";
    this.workauth="";
    this.wsd="";
    this.esd="";
    this.wed="";
    this.eed="";

    }

  ngOnInit(): void {
  }

}
