import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-claimreport',
  templateUrl: './claimreport.component.html',
  styleUrls: ['./claimreport.component.css']
})
export class ClaimreportComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllclaim();


  }

  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deleteclaim(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete claim profile successful!";
      this.getAllclaim();

    });

  }

  //get student
  getAllclaim(){

    this.service.getAllclaim().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}
