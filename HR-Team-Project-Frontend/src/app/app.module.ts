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
@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    TokenComponent,
    CheckTokenComponent,
    CheckUserNameComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
