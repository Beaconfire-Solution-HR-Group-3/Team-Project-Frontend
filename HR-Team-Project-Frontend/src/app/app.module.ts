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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [
    SharedServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
