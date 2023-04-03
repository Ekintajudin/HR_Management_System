import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllstaff();


  }

  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deletestaff(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete staff profile successful!";
      this.getAllstaff();

    });

  }

  //get student
  getAllstaff(){

    this.service.getAllstaff().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}
