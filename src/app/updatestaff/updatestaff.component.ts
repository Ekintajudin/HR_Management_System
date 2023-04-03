import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatestaff',
  templateUrl: './updatestaff.component.html',
  styleUrls: ['./updatestaff.component.css']
})

export class UpdatestaffComponent implements OnInit {

  staffForm = new FormGroup({
    'staffID':new FormControl('',Validators.required),
    'staff_name':new FormControl('',Validators.required),
    'staff_email':new FormControl('',Validators.required),
    'staff_salary':new FormControl('',Validators.required),
    'staff_phone':new FormControl('',Validators.required),
    'staff_address':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOnestaff(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.staffForm.patchValue({
          staffID:res.data[0].staffID,
            staff_name:res.data[0].staff_name,
            staff_email:res.data[0].staff_email,
            staff_salary:res.data[0].staff_salary,
            staff_phone:res.data[0].staff_phone,
            staff_address:res.data[0].staff_address

        });
      });
  }
//to update a staff
staffUpdate()
{
  console.log(this.staffForm.value);
    this.service.updatestaff(this.router.snapshot.params['id'], this.staffForm.value).subscribe((result:any)=>{

    this.staffForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}
