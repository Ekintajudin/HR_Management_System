import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { StaffComponent } from './staff/staff.component';
import { ReportComponent } from './report/report.component';
import { FormComponent } from './form/form.component';
import { UpdatestaffComponent } from './updatestaff/updatestaff.component';
import { ClaimreportComponent } from './claimreport/claimreport.component';
import { UpdateclaimComponent } from './updateclaim/updateclaim.component'

const routes: Routes = [ 
  {path: "home",component:HomeComponent },
  {path: "about",component:AboutComponent },
  {path: "faq",component:FaqComponent },
  {path: "staff",component:StaffComponent },
  {path: "report",component:ReportComponent },
  {path: "form",component:FormComponent },
  {path: "updatestaff/:id",component:UpdatestaffComponent },
  {path: "claimreport",component:ClaimreportComponent },
  {path: "updateclaim/:id",component:UpdateclaimComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
