import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HttpClientModule } from '@angular/common/http';
import { TokenComponent } from './token/token.component';
import { CheckTokenComponent } from './check-token/check-token.component';
import { CheckUserNameComponent } from './check-user-name/check-user-name.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DocumentsComponent } from './documents/documents.component';
import { SharedServiceService } from './service/shared-service.service';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';
import { HouseComponent } from './house/house.component';
import { HousingComponent } from './housing/housing.component';
import { FacilityReportComponent } from './facility-report/facility-report.component';
import { FacilityCommentComponent } from './facility-comment/facility-comment.component';
import { OneOptEadComponent } from './visa-status-management/one-opt-ead/one-opt-ead.component';
import { TwoFill983Component } from './visa-status-management/two-fill983/two-fill983.component';
import { ThreeWait983Component } from './visa-status-management/three-wait983/three-wait983.component';
import { FourUploadI20Component } from './visa-status-management/four-upload-i20/four-upload-i20.component';
import { FiveOptStemComponent } from './visa-status-management/five-opt-stem/five-opt-stem.component';
import { SixOptStemEadComponent } from './visa-status-management/six-opt-stem-ead/six-opt-stem-ead.component';
import { FinalComponent } from './visa-status-management/final/final.component';
import { HrhomepageComponent } from './hrhomepage/hrhomepage.component';
import { HremployeeprofileComponent } from './hremployeeprofile/hremployeeprofile.component';
import { HrapplicationComponent } from './hrapplication/hrapplication.component';
import { AngularFileUploaderModule } from "angular-file-uploader";


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    TokenComponent,
    CheckTokenComponent,
    CheckUserNameComponent,
    HomePageComponent,
    PersonalInfoComponent,
    DocumentsComponent,
    VisaStatusManagementComponent,
    HouseComponent,
    HousingComponent,
    FacilityReportComponent,
    FacilityCommentComponent,
    OneOptEadComponent,
    TwoFill983Component,
    ThreeWait983Component,
    FourUploadI20Component,
    FiveOptStemComponent,
    SixOptStemEadComponent,
    FinalComponent,
    HrhomepageComponent,
    HremployeeprofileComponent,
    HrapplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    AngularFileUploaderModule,
  ],
  providers: [
    SharedServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
