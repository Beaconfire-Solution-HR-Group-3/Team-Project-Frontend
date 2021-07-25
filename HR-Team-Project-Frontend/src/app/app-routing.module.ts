import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenComponent } from './token/token.component';
import { CheckTokenComponent } from './check-token/check-token.component';
import { CheckUserNameComponent } from './check-user-name/check-user-name.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DocumentsComponent } from './documents/documents.component';
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';
import { HousingComponent } from './housing/housing.component';
import { FacilityReportComponent } from './facility-report/facility-report.component';
import { FacilityCommentComponent } from './facility-comment/facility-comment.component';
import { OneOptEadComponent } from './visa-status-management/one-opt-ead/one-opt-ead.component';
import { TwoFill983Component} from './visa-status-management/two-fill983/two-fill983.component';
import { ThreeWait983Component} from './visa-status-management/three-wait983/three-wait983.component';
import { FourUploadI20Component } from './visa-status-management/four-upload-i20/four-upload-i20.component';
import { FiveOptStemComponent } from './visa-status-management/five-opt-stem/five-opt-stem.component';
import { SixOptStemEadComponent } from './visa-status-management/six-opt-stem-ead/six-opt-stem-ead.component';
import { FinalComponent } from './visa-status-management/final/final.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'homepage',  component: HomePageComponent},
  {path: 'checkToken', component: CheckTokenComponent},
  {path: 'checkUserName', component: CheckUserNameComponent},
  {path: 'onboarding', component: OnboardingComponent},
  {path: 'hire', component: TokenComponent},
  {path: 'personalInfo', component: PersonalInfoComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'visaManage', component: VisaStatusManagementComponent},
  {path: 'house', component: HomePageComponent},
  {path: 'housing', component: HousingComponent},
  {path: 'facilityreport', component: FacilityReportComponent},
  {path: 'facilitycomment', component: FacilityCommentComponent},
  {path: 'visaManage', component: VisaStatusManagementComponent,
    children: [
      {
        path: "one",
        component: OneOptEadComponent
      },
      {
        path: "two",
        component: TwoFill983Component
      },
      {
        path: "three",
        component: ThreeWait983Component
      },
      {
        path: "four",
        component: FourUploadI20Component
      },
      {
        path: "five",
        component: FiveOptStemComponent
      },
      {
        path: "six",
        component: SixOptStemEadComponent
      },
      {
        path: "final",
        component: FinalComponent
      }
    ]  
},
  {path: 'house', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
