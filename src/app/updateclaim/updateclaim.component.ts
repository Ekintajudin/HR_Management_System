import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updateclaim',
  templateUrl: './updateclaim.component.html',
  styleUrls: ['./updateclaim.component.css']
})

export class UpdateclaimComponent implements OnInit {

  claimForm = new FormGroup({
    'claimID':new FormControl('',Validators.required),
    'staff_name':new FormControl('',Validators.required),
    'date':new FormControl('',Validators.required),
    'amount':new FormControl('',Validators.required),
    'reason':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOneclaim(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.claimForm.patchValue({
          claimID:res.data[0].claimID,
            staff_name:res.data[0].staff_name,
            date:res.data[0].date,
            amount:res.data[0].amount,
            reason:res.data[0].reason

        });
      });
  }
//to update a claim
claimUpdate()
{
  console.log(this.claimForm.value);
    this.service.updateclaim(this.router.snapshot.params['id'], this.claimForm.value).subscribe((result:any)=>{

    this.claimForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}
