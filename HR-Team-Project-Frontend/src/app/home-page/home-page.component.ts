import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../service/shared-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  userName:string;

  constructor(private sharedServiceService :SharedServiceService) { 
    this.userName = sharedServiceService.username;
  }

  ngOnInit(): void {
  }

}
