import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateBaseComponent } from './candidate-base/candidate-base.component';
import { CompanyBaseComponent } from './company-base/company-base.component';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { UnauthorizedComponent } from './error/unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CandidateBaseComponent,
    CompanyBaseComponent,
    CandidateLoginComponent,
    CompanyLoginComponent,
    CandidateDashboardComponent,
    CompanyDashboardComponent,
    UnauthorizedComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
