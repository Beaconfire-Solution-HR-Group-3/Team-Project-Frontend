import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenComponent } from './token/token.component';
import { CheckTokenComponent } from './check-token/check-token.component';
import { CheckUserNameComponent } from './check-user-name/check-user-name.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { DocumentsComponent } from './documents/documents.component'
import { VisaStatusManagementComponent } from './visa-status-management/visa-status-management.component';

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
  {path: 'house', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
