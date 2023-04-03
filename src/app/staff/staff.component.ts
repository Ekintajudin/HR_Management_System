import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOnestaff(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.staffForm.patchValue({
        staff_name:res.data[0].staff_name,
        staff_email:res.data[0].staff_email,
        staff_salary:res.data[0].staff_salary,
        staff_phone:res.data[0].staff_phone,
        staff_address:res.data[0].staff_address,

      });
    });
  }
  }

  staffForm = new FormGroup({
    'staff_name':new FormControl('',Validators.required),
    'staff_email':new FormControl('',Validators.required),
    'staff_salary':new FormControl('',Validators.required),
    'staff_phone':new FormControl('',Validators.required),
    'staff_address':new FormControl('',Validators.required)


  });

  //to create a new staff
  staffSubmit(){
    if(this.staffForm.valid){
      console.log(this.staffForm.value);
      this.service.createstaff( this.staffForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.staffForm.reset();
        this.successmsg = 'Add Staff Profile Ssuccessful';
      });

    }
    else{
      this.errormsg = 'Add Staff Profile Unsuccessful';
    }

  }
//to update a staff
staffUpdate()
{
  console.log(this.staffForm.value,'updatedform');

  if(this.staffForm.valid)
  {
    this.service.updatestaff(this.staffForm.value,this.getparamid).subscribe((res)=>{
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
