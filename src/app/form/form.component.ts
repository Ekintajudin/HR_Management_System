import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOneclaim(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.claimForm.patchValue({
        staff_name:res.data[0].staff_name,
        date:res.data[0].date,
        amount:res.data[0].amount,
        reason:res.data[0].reason,


      });
    });
  }
  }

  claimForm = new FormGroup({
    'staff_name':new FormControl('',Validators.required),
    'date':new FormControl('',Validators.required),
    'amount':new FormControl('',Validators.required),
    'reason':new FormControl('',Validators.required)

  });

  //to create a new claim
  claimSubmit(){
    if(this.claimForm.valid){
      console.log(this.claimForm.value);
      this.service.createclaim( this.claimForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.claimForm.reset();
        this.successmsg = 'Add claim Ssuccessful';
      });

    }
    else{
      this.errormsg = 'Add claim Unsuccessful';
    }

  }
//to update a claim
claimUpdate()
{
  console.log(this.claimForm.value,'updatedform');

  if(this.claimForm.valid)
  {
    this.service.updateclaim(this.claimForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'invalid';
  }
}
}
