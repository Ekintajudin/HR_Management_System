import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { StaffComponent } from './staff/staff.component';
import { ReportComponent } from './report/report.component';
import { FormComponent } from './form/form.component';
import { ApiserviceService } from './apiservice.service';
import { HttpClientModule } from '@angular/common/http' ;
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdatestaffComponent } from './updatestaff/updatestaff.component';
import { ClaimreportComponent } from './claimreport/claimreport.component';
import { UpdateclaimComponent } from './updateclaim/updateclaim.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    StaffComponent,
    ReportComponent,
    FormComponent,
    UpdatestaffComponent,
    ClaimreportComponent,
    UpdateclaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
